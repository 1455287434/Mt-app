<template>
  <div class="youC">
    <div class="ge">
      <dl>
        <dt>{{ YG }}</dt>
        <dd
          v-for="(item, index) in ne"
          :key="index"
          :class="{
            active: suo == item.flag
          }"
          @mouseenter="enter(item.flag)"
        >
          {{ item.title }}
        </dd>
      </dl>
    </div>
    <div class="zhanT">
      <el-row>
        <el-col
          class="fu"
          :span="6"
          v-for="(item, index) in shuJ[suo]"
          :key="index"
          :offset="index > 0 ? 2 : 0"
        >
          <el-card :body-style="{ padding: '0px' }" class="beijing">
            <img :src="item.image" class="image" />
            <h1>{{ item.title }}</h1>

            <h1 class="natie">{{ item.subTitle }}</h1>
            <div class="many">
                <span>￥</span>{{item.price}}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  props: ["YG", "shuJ", "ne"],
  data() {
    return {
      suo: "all",
      currentDate: ""
    };
  },

  methods: {
    enter(item) {
      this.suo = item;
      //   console.log(item)
      //   console.log(this.shuJ)
      this.xianS = this.shuJ[this.suo];
      console.log(this.xianS);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/youG/YG.less";
</style>
