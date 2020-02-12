<template>
  <div class="lrb">
    <div class="zong">
      <div class="zuo">
        <div class="block">
          <el-carousel height="">
            <el-carousel-item v-for="item in sun" :key="item" class="sun">
              <a href="#"><img :src="item" alt=""/></a>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="zhong">
        <img
          src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
          alt=""
        />
      </div>
      <div class="you">
        <div class="tou-H">
            <div class="touxiang"></div>
            <span>Hi！你好</span>
        </div>
        <div class="denglu" v-if="$store.state.falg">
          <el-button  type="primary" round class="btn-D">

            <router-link :to="{
              name : 'zhuce'
            }">注册 </router-link>
          </el-button>
        </div>
        <div class="zhuce" v-if="$store.state.falg">
          <el-button type="primary" round class="btn-L">
            <router-link :to="{
              name : 'denglu'
            }">
              立即登陆
            </router-link>
          </el-button>
        </div>
        <div class="huan" v-if ="$store.state.falgs">
        <span>  欢迎 </span>{{$store.state.name}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sun: [
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg"
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/nav/lrb.less";
</style>
<style>
.el-button--primary a{
  border-style: none;
}
.el-carousel__container {
  padding: 0px;
  margin: 0px;
  width: 550px;
  height: 240px;
  /* border: 1px solid black; */
  overflow: inherit;
}
.lrb .zong div[data-v-4619007e] {
  padding: 0px;
  margin: 0px;
}
.el-carousel--horizontal{
  overflow: hidden;
}
.el-main {
  overflow: inherit;
}
.block{
  /* padding: 20px */
}
</style>
