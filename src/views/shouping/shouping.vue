<template>
    <div class="shouping">
        
        <el-container >
  <el-header class="nihao" height = "" >
      <mHeader/>
  </el-header>
  <el-main class="Main">
      <router-view/>
  </el-main>
  <el-footer>
      <foot/>
  </el-footer>
</el-container>


    </div>
</template>
<script>
import mHeader from "@/components/shouZu/header.vue";
import foot from "../../components/shouZu/footer"
export default {
    components :{
        mHeader,
        foot
    }
}
</script>
<style >
.Main.el-main{
    position: relative;
    top: -50px;
    overflow: inherit;
}
.Main{
 
}
.el-header.nihao {
    padding: 0px;
}
.shouping{
     color: #999;
     font-size: 12px
}
body{
    
    /* color: #999; */
    
  background-color: #f8f8f8;
}
</style>