<template>
    <div class="youG">
        <youC :YG="youge" :shuJ="shuJ" :ne="neirong"/>
    </div>
</template>
<script>
import youC from "../components/shouZu/youG/youC";
import api from "../api/api"
export default {
    data(){
        return {
            youge:"有格调",
            shuJ : '',
            neirong :[{
                title:'全部',
                flag:"all"
            },
            {
                title:'约会聚餐',
                flag:"food"
            },
            {
                title:'丽人SPA',
                flag:"movie"
            },
            {
                title:'电影演出',
                flag:"spa"
            },
            {
                title:'品质出游',
                flag:"travel"
            },
          
            ]
        }
    },
    components:{
        youC,
    },
    created(){
        api.youG().then((res)=>{
            this.shuJ = res.data.data
            
        })
    }
}
</script>
<style lang="less" scoped>
    @import "../assets/styles/youG/youG.less";
</style>