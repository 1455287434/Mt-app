<template>
  <div class="nav-L">
    <dl class="dl-1" @mouseleave="leave">
      <dt>
        全部分类
      </dt>
      <dd v-for="(item, index) in child" :key="index" @mouseenter="enter(item)">
           <span :class="`tu${index}`"></span>  {{ item.title }} <span class="L">></span>
      </dd>
    </dl>
    <div v-if="falg" class="pos" @mouseenter="jin(falg)" @mouseleave="chu">
      <template v-for="(i,N) in falg"> 
          <h2 :key="N">{{i.title}}
              <span>更多></span>
              
          </h2>

            <span v-for="(item,index) in i.children" :key="index+1">
                {{item}}
            </span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        nihao:'',
      child: [
        {
          title: "美团",
          children: [
            {
              title: "美团",
              children: [
                "代金券",
                "甜点饮品",
                "火锅自助餐",
                "小吃快餐",
                "日韩料理西餐",
                "聚餐宴请",
                "烧烤烤肉东北菜",
                "川湘菜江浙菜"
              ]
            }
          ]
        },
        {
          title: "外卖",
          children: [
            {
              title: "外卖",

              children: ["美团外卖"]
            }
          ]
        },
        {
          title: "酒店",
          children: [
            {
              title: "酒店",
              children: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        }
      ],
      falg: null
    };
  },
  methods: {
    enter(item) {
      this.falg = item.children;
    
    },
    leave(){
       this.nihao= setTimeout(() => {
            this.falg = null
        }, 200);
        
    },
    jin(falg){
       clearTimeout(this.nihao)
         
       
    },
    chu(){
        this.falg = null
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/nav/n-lest.less";
</style>
