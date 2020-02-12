<template>
  <div class="remenL">
    <dl>
      <dt>猜你喜欢</dt>
      <dd v-for="(item,index) in jiu" :key="index">
        <img
          :src="item.image"
          alt=""
        />
      
        <div class="cao">
              <h1>{{item.title}}</h1>
          <div class="xia">
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <span>{{item.commentNum}}个平论</span>
          </div>
          <h3>{{item.address}}</h3>
          <h2>{{item.avgPrice}} <span>起</span></h2>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
import api from "../../api/api";
export default {
    data(){
        return {
            jiu:[]
        }
    },
  created() {
    api.reS().then(res => {
      console.log(res,"sunjds");
      this.jiu = res.data.data;
      console.log(this.jiu)

    });
  }
};
</script>
<style lang="less">
@import "../../assets/styles/remen/remenL.less";
</style>
