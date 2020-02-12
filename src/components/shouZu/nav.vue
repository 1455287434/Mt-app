<template>
  <div class="nav">
    <div>
      <el-row>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <Mleft /></div
        ></el-col>
        <el-col :span="19"
          ><div class="grid-content bg-purple-light">
            <Mright />
            <LRB />
            <navB /></div
        ></el-col>
      </el-row>
    </div>
      <youG/>
  </div>
</template>
<script>
import Mleft from "../shouZu/nav/nav.left";
import Mright from "../shouZu/nav/nav.right";
import LRB from "../shouZu/nav/navRB";
import navB from "../shouZu/nav/navB";
import youG from "../yougediao"
export default {
  components: {
    Mleft,
    Mright,
    LRB,
    navB,
    youG
  
  }
};
</script>
<style>
.el-main {
  margin: 0px;
  padding: 0px;
}
</style>
<style lang="less">
@import "../../assets/styles/nav/nav.less";
</style>
