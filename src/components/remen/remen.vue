<template>
  <div class="remen">
    <el-row>
      <el-col :span="18"
        ><div class="grid-content bg-purple">
          <remenT />
          <remenN /></div
      ></el-col>

      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
            <remenL/>
          </div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
import remenT from "./remenT";
import remenN from "./remenN";
import   remenL from "./remenL"
export default {
  components: {
    remenT,
    remenN,
    remenL
  }
};
</script>
<style lang="less" scoped></style>
<style scoped>
    .remen{
        width: 1230px;
        /* border:1px solid black; */
        margin: 0 auto
    }
</style>
