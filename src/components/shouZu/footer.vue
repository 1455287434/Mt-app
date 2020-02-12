<template>
  <div class="foot">
    <div class="mT">
      <span class="D">美团导航</span>

      <fuD :shu="shu" />
      <fuD :shu="woya" />
      <fuD :shu="haihao" />
    </div>
    <bott/>
  </div>
</template>
<script>
import fuD from "../footer/fuZ";
import bott from "../footer/bottom"
export default {
  data() {
    return {
      shu: {
        title: "热门城市",
        arr: [
          {
            sunjiahui: "天津",
            falg: false
          },
          {
            sunjiahui: "南京",
            falg: false
          },
          {
            sunjiahui: "郑州",
            falg: false
          },
          {
            sunjiahui: "石家庄",
            falg: false
          },
          {
            sunjiahui: "锦州",
            falg: false
          },
          {
            sunjiahui: "大连",
            falg: false
          },
          {
            sunjiahui: "哈尔滨",
            falg: false
          },
          {
            sunjiahui: "佛山",
            falg: false
          },
          {
            sunjiahui: "太原",
            falg: false
          },
          {
            sunjiahui: "深圳",
            falg: false
          },
          {
            sunjiahui: "郑州",
            falg: false
          },
          {
            sunjiahui: "昆明",
            falg: false
          },
          {
            sunjiahui: "大连",
            falg: false
          },
          {
            sunjiahui: "上海",
            falg: false
          },
          {
            sunjiahui: "常州",
            falg: false
          },
          {
            sunjiahui: "哈尔滨",
            falg: false
          },
          {
            sunjiahui: "杭州",
            falg: false
          },

          {
            sunjiahui: "宁波",
            falg: false
          },
          {
            sunjiahui: "广州",
            falg: false
          },
          {
            sunjiahui: "长沙",
            falg: false
          }
        ]
      },
      woya :  {
        title: "热门分类",
        arr: [
          {
            sunjiahui: "酒店",
            falg: true
          },
          {
            sunjiahui: "美食",
            falg: false
          },
          {
            sunjiahui: "休闲娱乐",
            falg: false
          },
          {
            sunjiahui: "运动健身",
            falg: false
          },
          {
            sunjiahui: "生活服务",
            falg: false
          },
          {
            sunjiahui: "上门服务",
            falg: false
          },
          {
            sunjiahui: "购物",
            falg: false
          },
          {
            sunjiahui: "时尚购",
            falg: false
          },
          {
            sunjiahui: "本地购物",
            falg: false
          },
          {
            sunjiahui: "结婚",
            falg: false
          },
          {
            sunjiahui: "摄影写真",
            falg: false
          },
          {
            sunjiahui: "宴会",
            falg: false
          },
          {
            sunjiahui: "丽人",
            falg: false
          },
          {
            sunjiahui: "母婴亲子",
            falg: false
          },
          {
            sunjiahui: "学习培训",
            falg: false
          },
          {
            sunjiahui: "家装",
            falg: false
          },

          {
            sunjiahui: "汽车服务",
            falg: false
          },
          {
            sunjiahui: "医疗",
            falg: false
          },
          {
            sunjiahui: "宠物",
            falg: false
          }
        ]
      },
      haihao :  {
        title: "周边热门",
        arr: [
          {
            sunjiahui: "胶州酒店",
            falg: false
          },
          {
            sunjiahui: "胶州美食",
            falg: false
          },
          {
            sunjiahui: "即墨悠闲娱乐",
            falg: false
          },
          {
            sunjiahui: "寂寞运动健身",
            falg: false
          },
          {
            sunjiahui: "胶州生活服务",
            falg: false
          },
          {
            sunjiahui: "即墨上门服务",
            falg: false
          },
          {
            sunjiahui: "高密购物",
            falg: false
          },
          {
            sunjiahui: "胶州时尚购",
            falg: false
          },
          {
            sunjiahui: "胶州本地购物",
            falg: false
          },
          {
            sunjiahui: "胶州结婚",
            falg: false
          },
          {
            sunjiahui: "高密摄影写真",
            falg: false
          },
          {
            sunjiahui: "即墨宴会",
            falg: false
          },
          {
            sunjiahui: "即墨丽人",
            falg: false
          },
          {
            sunjiahui: "即墨母婴亲子",
            falg: false
          },
          {
            sunjiahui: "胶州学习培训",
            falg: false
          },
          {
            sunjiahui: "高密家装",
            falg: false
          },
          {
            sunjiahui: "即墨汽车服务",
            falg: false
          },

          {
            sunjiahui: "胶州医疗",
            falg: false
          },
          {
            sunjiahui: "高密宠物",
            falg: false
          },
        
        ]
      },
    };
  },
  components: {
    fuD,
    bott
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/styles/footer.less";
</style>
