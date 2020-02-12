<template>
  <div class="remenT">
    <div class="mianbao">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="mian" :to="{ path: '/' }"
          >杭州美团</el-breadcrumb-item
        >
        <el-breadcrumb-item class="mian">杭州我鱼你</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="qu">
      <div class="fen">
        <div class="fen1">
          <span>分类</span>
          <span class="sun">全部</span>
          <div class="zhanS">
            <ul>
              <li
                v-for="(item, index) in fen"
                :key="index"
                @mouseenter="enter(item.title)"
                @mouseleave="leave"
              >
                {{ item.title }}
                <div v-if="falg == item.title" @mouseenter="en(item.title)">
                  <h1>{{ item.title }}</h1>
                  <span v-for="(s, index) in item.subList" :key="index">{{
                    s.name
                  }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="yu">
        <div class="fen1">
          <span>区域</span>
          <span class="sun">全部</span>
          <div class="zhanS">
            <ul>
              <li
                v-for="(item, index) in qu"
                :key="index"
                @mouseenter="enter(item.title)"
                @mouseleave="leave"
              >
                {{ item.title }}
                <div v-if="falg == item.title" @mouseenter="en(item.title)">
                  <h1>{{ item.title }}</h1>
                  <span v-for="(s, index) in item.subList" :key="index">{{
                    s.name
                  }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from  "../../api/api"
export default {
  data(){
    return {
      fen:[],
      falg:false,
      f :null,
      qu:[{
        "title": "推荐商圈",
        "subList": [{
            "name": "望京",
            "id": 120000
        }, {
            "name": "昌平",
            "id": 12222
        }]
    }, {
        "title": "南岗区",
        "subList": [{
            "name": "中央大街",
            "id":123
        }, {
            "name" : "西客站",
            "id": 11
        }, {
            "name": "花园街",
            "id":222
        }, {
            "name": "通乡街/果园街",
            "id": 21
        }, {
            "name": "爱建社区",
            "id": 1
        }, {
            "name": "学府路",
            "id":34
        }]
    }
      ]








    }
  },
  methods:{
    enter(res){
      clearTimeout(this.f)
      this.falg=res
    },
    leave(){
    this.f= setTimeout(()=>{
      this.falg=false

      },200)
    },
    en(res){
      clearTimeout(this.f)
      this.falg = res
    }
  },
  created(){
    // console.log("sdfdihdsfsdijfkdskjfs")
    api.fenler().then(res =>{
      this.fen = res.data.data
      // console.log(this.fen)
    })
    api.quyu().then(res=>{
      // console.log(res.data)
    })
    // console.log(this.qu)

  }
}
</script>
<style>
.mianbao .el-breadcrumb__item.mian .el-breadcrumb__inner {
  font-size: 12px;
  cursor: pointer;
  font-weight: 0;
  color: #666666;
}
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  font-weight: normal;
}
.mianbao .el-breadcrumb__item.mian .el-breadcrumb__inner:hover {
  color: red;
}
</style>
<style lang="less" scoped>
@import "../../assets/styles/remen/remenT.less";
</style>
