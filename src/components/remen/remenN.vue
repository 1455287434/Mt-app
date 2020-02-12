<template>
  <div class="remenN">
    <div class="zhiN">
      <dl>
        <dt>智能排序</dt>
        <dd>价格排序<i class="el-icon-d-caret"></i></dd>
        <dd>人气最高</dd>
        <dd>评价最高</dd>
      </dl>
    </div>
    <div class="zS">
      <div class="tu" v-for="(item,index) in shuJ" :key="index">
        <img :src="item.img" />
        <div class="L">
          
           <div class="dinM">
                <span class="wo245">{{item.title}}</span>
            <div class="wuJ">
           <div class="wu">
                  <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
           </div>
           <div class="zuo">
               <span>{{item.bu}}</span>
               <span>{{item.score}}分</span>
               <span class="ping">{{item.commentNum}}人评论</span>
           </div>
            </div>

            <div class="dizhi">
              <span class="suni">{{item.address}}</span>
              <span class="suni"><i class="el-icon-location-outline"></i>查看地图</span>
            </div>
            <h1>人均￥{{item.avgPrice}}</h1>
           </div>
            <div class="jS">
              <div class="shang">
                <h1>100元新美大推荐:三店同享</h1>
                <h2>
                  <span class="da">￥78</span>
                  <span>门市价￥100</span>
                  <span>已售61</span>
                </h2>
              </div>
              <div class="xia">
                <h1>私房菜，建议5-7人使用</h1>
                <h2>
                  <span class="qian">￥328</span>
                  <span>门市价￥54</span>
                  <span>已售13</span>
                </h2>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from  "../../api/api"
export default {
    data(){
        return {
            shuJ:[]
        }
    },
    created(){
        api.tuijian().then(res => {
              const jia = res.data.data
              
                const sun = [
                  "//p0.meituan.net/msmerchant/924a13d039f01886ca712138690c058f105991.jpg@220w_125h_1e_1c",
                  "//p1.meituan.net/deal/89837db005ff044c86d5d4196efdd82b126433.jpg@220w_125h_1e_1c",
                  "//p0.meituan.net/msmerchant/8fd3db2d2d9b47014886a84880615b02182586.jpg@220w_125h_1e_1c",
                  "//p1.meituan.net/waimaipoi/13f1a080a6c61732efc5e5f3546521e1219136.jpg@220w_125h_1e_1c",
                  "//p0.meituan.net/xianfu/6b9a52deac6b64df090b4ca8d2c14cd7507904.jpg@220w_125h_1e_1c",
                  "//p1.meituan.net/xianfu/ff592bcec0d1b9960c33e797f06b25ee258976.jpg@220w_125h_1e_1c",
                  "//p1.meituan.net/xianfu/5698aa32421d551ee40476296dbb6b4a55155.jpg@220w_125h_1e_1c",
                  "//p1.meituan.net/waimaipoi/98766aa1bb977b4fc455f011d3d6989c28672.jpg@220w_125h_1e_1c",
                  "//p1.meituan.net/dpmerchantpic/c766857630181c5b723bdf6afa3a4644151352.jpg@190w_106h_1e_1c",
                  "//p1.meituan.net/msmerchant/efcb18f19429428c8b752735b8a87e9c4808016.jpg@190w_106h_1e_1c"
                ];
                jia.forEach((item,index) =>{
                  item.img = sun[index]
                    if(item.score >= 4.5){
                      item.bu = "很好"
                    }else if (item.score >= 4 && item.score < 4.5){
                      item.bu = "好"
                    }else if(item.score > 3.5 && item.score <4){
                      item.bu = "不错"
                    }else if (item.score > 3 && item.score < 3.5){
                      item.bu = "一般"
                    }else{
                      item.bu = "差"
                    }
                })

                this.shuJ = jia

        })
    }
};
</script>
<style lang="less" scoped>
@import "../../assets/styles/remen/remenV.less";
</style>
