<template>
  <div class="city">
    <cityDH />

    <cityB :a="reme" :b="chengshi" />
    <cityB :a="zui" :b="zuijin"/>
    <pinY/>
  </div>
</template>
<script>
import cityDH from "../../components/city/cityDH";
import cityB from "../../components/city/cityB";
import api from "../../../src/api/api"
import pinY from "../../components/city/pinyin"
export default {
data(){
  return {
    reme: "",
    chengshi :"热门城市:",
    zuijin :"最近访问:",
    zui:null
  }
},

  components: {
    cityDH,
    cityB,
    pinY,
  },
  created(){
   api.remenC().then(res =>{
    this.reme = res.data.data
    
   })
   api.zuijin().then(res=>{
     this.zui = res.data.data
   })
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/styles/city/city.less";
</style>
