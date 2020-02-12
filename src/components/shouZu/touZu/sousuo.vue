<template>
  <div class="shou">
    <div class="wrapper">
      <div class="wrapper1">
        <div class="tu nihao">
          <div class="tubiao">
           <router-link to="/">
              <img
              src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
              alt="美团"
            />
           </router-link>
          </div>
        </div>
        <div class="input nihao">
          <el-input 
            class="wo"
            v-model="input"
            placeholder="请输入内容" @focus="focus" @blur="blur" @input="inputs"
          ></el-input>
          <div v-if="isS" class="sou123">
              <dl>
                <dd v-for="(item,index) in nihao" :key="index">
                  {{item}}
                </dd>
              </dl>
          </div>
           <div class="remen123" v-if="isD">
              <dl>
                  <dt>热门搜索</dt>
                  <dd v-for="(item,index) in remensuo" :key="index">
                    <router-link :to="{
                      name :'remen'
                    }">{{item}}</router-link>
                  </dd>
                 
              </dl>
          </div>
         
        </div>
        <div class="button nihao">
          <el-button type="primary"><i class="el-icon-search"></i></el-button>
        </div>
      
      </div>
      
    </div>
    
  </div>
</template>
<script>
import api from "../../../api/api"
export default {
  data() {
    return {
      input: "",
      falg:false,
      nihao : "",
      remensuo : ""
    };
  },
  created(){
    api.remen().then(res=>{
     this.remensuo = res.data.data
    })
  },
computed:{
    isD(){
        return this.falg && !this.input
    },
    isS(){
        return this.falg && this.input
    }
},
  
  methods:{
    inputs(){
        api.sousuo().then((res)=>{
        // console.log(res);
        let sun = res.data.data.list
        let jia =   sun.filter((ele)=>{
          return ele.indexOf(this.input) > -1 
      }) 
        // console.log(jia)
        this.nihao = jia
    })
    },
      focus(){
          if(this.input ==""){
                this.falg = true
          }else{
            this.falg = false  
          }
          
      },
      blur(){
         setTimeout(()=>{
            this.falg=false
         },200)
      }
  }
};
</script>
<style >
   .wo input.el-input__inner{
          border:1px solid #E5E5E5;
          
          border-top-right-radius: 0px;
           border-bottom-right-radius: 0px
        }
</style>
<style lang="less" scoped>
@import "../../../assets/styles/sousuo.less";
.shou {
 
}
.button {
     margin-top: 6.5px;
     
  .el-button {
    width: 70px;
    height: 40px;
    font-size: 20px;
    background-color:orange;
    border: 1px solid orange;
    border-top-left-radius: 0px;
    border-bottom-left-radius:0px;
   
  }
}
</style>
