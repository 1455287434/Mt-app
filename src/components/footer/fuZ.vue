<template>
       <div class="meiD">
                <h1>{{shu.title}}</h1>
                <span class="SSS">
                    <router-link to="/" v-for="(item,index) in shu.arr" :key="index" :class="{
                        active: item.falg
                    }">
                    {{item.sunjiahui}}
                    </router-link>
                      
                </span>
                  </div>
</template>
<script>
export default {
    props:["shu"]
}
</script>
<style lang="less" scoped>
    @import "../../assets/styles/footer/fuD.less";
</style>