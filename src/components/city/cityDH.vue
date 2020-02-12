<template>
  <div class="cityDH">
    <div class="xuanze">
      按省份选择:
    </div>
    <div class="sheng" @click="xiao" v-win="winS">
      <span>{{ sH }}</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div :class="{ cheng: true, chengs: classA }" @click="suoya" v-win="winS">
      <span>{{ cheng }}</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div class="sousuoo">
      <span>直接搜索 :</span>
      <input type="text" placeholder="请输入城市中文或拼音" />
    </div>
    <div class="xiala" v-if="flag">
      <h1>省份</h1>
      <ul v-for="(item, index) in arr" :key="index">
        <li
          v-for="(sun, index) in item"
          :key="index"
          @click="click(sun.cityInfoList, sun.provinceName)"
        >
          {{ sun.provinceName }}
        </li>
      </ul>
    </div>
    <div class="xiala2" v-if="suo">
      <h1>城市</h1>
      <ul v-for="(item, index) in cArr" :key="index">
        <li v-for="(S, index) in item" :key="index" @click="shi(S.name)">
          
          <router-link to="/">{{ S.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import api from "../../api/api";
export default {
  data() {
    return {
      arr: [],
      cArr: [],
      flag: false,
      sH: "省份",
      suo: false,
      cheng: "城市",
      classA: false
    };
  },
  created() {
    api.sheng().then(res => {
      let shengF = res.data.data;
      
      let cod = Math.ceil(shengF.length / 12);
      const sF = [];
      for (let i = 0; i < cod; i++) {
        sF.push(shengF.slice(i * 12, i * 12 + 12));
      }
      this.arr = sF;
    });
  },
  methods: {
    click(item, res) {
      const jia = Math.ceil(item.length / 12);
      let sun = [];
      for (let i = 0; i < jia; i++) {
        sun.push(item.slice(i * 12, i * 12 + 12));
      }
      this.cArr = sun;
    //   console.log(this.cArr);
      this.flag = false;
      this.sH = res;
      this.classA = true;
    },
    xiao(e) {
      e.stopPropagation();
      this.flag = true;
    },
    suoya(e) {
      e.stopPropagation();
      if (this.classA) {
        this.suo = true;
      }
    },
    shi(res) {
      
      this.suo = false;
      this.cheng = res;
      this.$store.commit("sun",res)
    
    },
    winS(res) {
      this.suo = res;
      this.flag = res;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/styles/city/cityDH.less";
</style>
