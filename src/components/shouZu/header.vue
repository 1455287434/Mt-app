<template>
  <div class="header">
    <div>
      <el-row>
        <daohang />
      </el-row>
      <el-row>
        <sousuo />
      </el-row>
    </div>
  </div>
</template>
<script>
import daohang from "../shouZu/touZu/daohang";
import sousuo from "../shouZu/touZu/sousuo";

export default {
  components: {
    daohang,
    sousuo
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  position: relative;
 
}
</style>
