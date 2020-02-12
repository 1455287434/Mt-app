<template>
  <div class="daohang">
    <div class="tou-wrapper">
      <el-row class="tou">
        <el-col :span="14"
          ><div class="grid-content bg-purple-dark">
            <dl class="dao-left">
              <dt><i class="el-icon-location-outline"></i>{{$store.state.dizhi}}</dt>
              <dd>
                <router-link :to="{name :'qiehuan'}" class="dao-qie">切换城市</router-link>
              </dd>
              <dd>
                [
                <router-link to="/" class="tou-3">乐庭</router-link>
                <router-link to="/" class="tou-3">滦州市</router-link>
                <router-link to="/" class="tou-3">滦州</router-link>
                ]
              </dd>
              <dd class="tou-d">
                <router-link v-if="$store.state.falg" to="/black/denglu" class="tou-a">立即登陆</router-link>
                <router-link v-if="$store.state.falg" to="/black/zhuce">注册</router-link>
              </dd>
            </dl>
          </div></el-col
        >

        <el-col :span="10" class="sunjia"
          ><div class="grid-content bg-purple-dark">
            <dl class="dao-right">
              <dt class=" sun">
                <router-link to="/sun">我的美团</router-link>
              </dt>

              <div class="dao">
                <dd>
                  <router-link to="">我的订单</router-link>
                </dd>
                <dd>
                  <router-link to="">我的收藏</router-link>
                </dd>
                <dd>
                  <router-link to="">抵用卷</router-link>
                </dd>
                <dd>
                  <router-link to="">账户设置</router-link>
                </dd>
              </div>
            </dl>
            <dl class="">
              <dt class=" ">
                <router-link to="/sun">手机APP</router-link>
              </dt>
            </dl>
            <dl class="right1">
              <dt class=" ">
                <router-link to="/sun">商家中心</router-link>
              </dt>

              <div class="sun-right1">
                <dd>
                  <router-link to="">美团餐饮商户中心</router-link>
                </dd>
                <dd>
                  <router-link to="">登陆商家中心</router-link>
                </dd>
                <dd>
                  <router-link to="">美团智能收银</router-link>
                </dd>
                <dd>
                  <router-link to="">我想合作</router-link>
                </dd>
                <dd>
                  <router-link to="">手机免费开店</router-link>
                </dd>
                <dd>
                  <router-link to="">餐饮代理商招募</router-link>
                </dd>
                <dd>
                  <router-link to="">商家申请开票</router-link>
                </dd>
                <dd>
                  <router-link to="">免费合作美团排队</router-link>
                </dd>
              </div>
            </dl>
            <dl class="dao-right">
              <dt class=" sun">
                <router-link :to='{name:"nihao",params:{
                  name : "nihaohuai"
                }}'>美团规则</router-link>
              </dt>

              <div class="dao">
                <dd>
                  <router-link to="">规则中心</router-link>
                </dd>
                <dd>
                  <router-link to="">规则目录</router-link>
                </dd>
                <dd>
                  <router-link to="">规则评议院</router-link>
                </dd>
              </div>
            </dl>
            <dl class="">
              <dt class=" ">
                <router-link to="/sun">网站导航</router-link>
              </dt>

              <div class="">
            
               
              </div>
            </dl>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../../../assets/styles/sun.less";
</style>
