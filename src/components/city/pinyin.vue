<template>
  <div class="pinY">
    <div class="pinYi">
      <h1 class="shouZ">按拼音首字母选择:</h1>
      <span v-for="(item,index) in abc" :key="index"><a :href="'#'+item">{{item}}</a></span>
 
    </div>
    <div class="zhanS">
            <div class="suiji" v-for="(item ,index) in shuU" :key="index">
                <div class="suiJ" :id="item[0].firstChar.toUpperCase()">{{item[0].firstChar.toUpperCase()}}</div>
                <span>
                    <router-link to="/" v-for="(s,index) in item" :key="index" @click.native="click(s.name)">{{s.name}}</router-link>
            
                </span>
                
            </div>
    </div>
  </div>
</template>
<script>
import api from  "../../api/api"
export default {
    data(){
        return {    
            abc :"abcdefghjklmnpqrstwxyz".toUpperCase(),
            shuU :''
        }
    },
created(){
    api.pinyin().then(res =>{
        const sun = res.data.data;
        console.log(sun)
        const ji = {}
        sun.forEach((item, index)=>{
            if( !ji[item.firstChar]){
                ji[item.firstChar] = []
                 ji[item.firstChar].push(item)
            }else{
                     ji[item.firstChar].push(item)
            }
        })
        console.log(ji)
        this.shuU = ji
    })
},
methods:{
    click(res){
        this.$store.commit("sun",res)
    }
}
}
</script>
<style lang="less" scoped>
@import "../../assets/styles/city/pinY.less";
</style>
