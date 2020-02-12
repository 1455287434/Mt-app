<template>
  <div class="cityB">
    <div class="re">
      <span>{{b}}</span>
    </div>
    <div class="chengshi">
      <ul>
        <li v-for="(item, index) in a" :key="index"  >
          <router-link to="/" @click.native="click(item.name)">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["a","b"],
  methods:{
    click(res){
      this.$store.commit("sun",res)
      console.log("a")
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/styles/city/cityB.less";
</style>
