<template>
  <div class="denglu">
    <div class="zhu">
      <div class="header">
        <router-link to="/">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
            alt=""
          />
        </router-link>
      </div>
      <div class="navS">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          alt=""
        />
        <div class="shury">
          <h4 v-if="falg">
            <i class="el-icon-remove"></i>
            {{ content }}
          </h4>
          <h1>账号登陆</h1>
          <div class="zhangH">
            <input type="text" placeholder="手机号" v-model="userName" />
          </div>
          <div class="mi">
            <input type="password" placeholder="密码" v-model="password" />
          </div>
          <h2>忘记密码</h2>
          <div class="de" @click="clicks">
            <router-link :to="{
                name :''
            }">
            登陆
            </router-link>
          </div>
          <h3>
            还没有账号？
            <router-link :to="{name : 'zhuce'}">
              免费注册
            </router-link>
          </h3>
          <div class="zhong">
            <span>用合作网站账号登录</span>
          </div>
        </div>
      </div>
      <div class="di">
        <ul>
          <li>关于美团<span>|</span></li>
          <li>加入我们<span>|</span></li>
          <li>商家入驻<span>|</span></li>
          <li>帮助中心<span>|</span></li>
          <li>美团手机版</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  data() {
    return {
      falg: false,
      userName: "",
      password: "",
      content: "",
      pro:""
    };
  },
  methods: {
    click() {
      const sun = this.zhangH;
      const reg = /(\d)+/;
      const jia = sun.match(reg);
      console.log(jia);
      if (this.zhangH == "" && this.MI == "") {
        this.falg = true;
        this.content = "请输入账号或密码";
      } else if (this.zhangH == "") {
        this.falg = true;
        this.content = "请输入账号";
      } else if (this.MI == "") {
        this.falg = true;
        this.content = "请输入密码";
      } else if (jia[0].length != 11 || jia == null) {
        this.falg = true;
        this.content = "请输入正确的手机号";
      } else {
        this.falg = false;
      }
    },
    clicks() {
      api
        .denglu({
          userName: this.userName,
          password: this.password
        })
        .then(res => {
          if (res.data.msg !== "登录成功") {
            this.falg = true;
            this.content = res.data.msg;
           
         
            console.log(res)

          }else{
                this.pro = "shou"
                   this.$store.commit("jia")
                 this.$router.push("/")
                 this.$store.commit("hui",res.data.data)
          }
        });
      
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
@import "../assets/styles/denglu/denglu.less";
</style>
<style>
    body{
        background-color: white;
    }
</style>
