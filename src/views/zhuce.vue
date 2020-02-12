<template>
  <div class="zhuce">
    <div class="heng">
      <div class="quan">
        <div class="tou">
          <router-link to="/" class="a">
            <img
              src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
              alt=""
            />
          </router-link>
          <span>已有美团账号</span>
          <router-link :to="{ name: 'denglu' }" class="b">登陆</router-link>
        </div>
      </div>
    </div>
    <div class="zhong">
      <div class="zhongM">
        <div class="jiaoyan">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="手机号" prop="iphone">
              <el-input
                type="text"
                v-model="ruleForm.iphone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="创建密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                @input="input()"
              ></el-input>
            </el-form-item>
            <div class="gun">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
              <div class="jindu"></div>
              <div
                :class="{
                  gundong: true,
                  ruo: ruo,
                  zhongSS: zhong,
                  qiangSS: qiang
                }"
              ></div>
            </div>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">
                <router-link
                  :to="{
                    name: ''
                  }"
                >
                  同意以下协议并注册
                </router-link>
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="wanle">
          <div class="jieshu">
              <span>《美团点评用户服务协议》 </span>
          <span>《美团点评隐私政策》</span>
          </div>
        
      </div>
        <div class="wei"></div>
          <div class="jieshu1">
              <div class="jieshu2">
                  ©meituan.com  京ICP证070791号  京公网安备11010502025545号
              </div>
          </div>
    </div>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  data() {
    var iPhone = (rule, value, callback) => {
      const sun = value;
      const reg = /(\d)+/;
      const jia = sun.match(reg);
      if (jia == null) {
        callback(new Error("请输入手机号"));
      } else if (jia[0].length !== 11) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length <= 6) {
        callback(new Error("密码不低于6位"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      fals: "",
      ruleForm: {
        pass: "",
        checkPass: "",
        iphone: ""
      },
      qiang: "",
      ruo: "",
      zhong: "",
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        iphone: [{ validator: iPhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          api
            .zhuce({
              userName: this.ruleForm.iphone,
              password: this.ruleForm.pass,
              rePassword: this.ruleForm.checkPass
            })
            .then(res => {
              this.fals = "denglu";

              console.log(res);
              if (res.data.msg == "用户名已存在") {
                alert("用户名已存在");
              } else {
                alert("注册成功");
                this.$router.push({
                  name: "denglu"
                });
                // this.$store.commit("hui",res.data.data)
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    input() {
      const sun = this.ruleForm.pass;
      const reg = /(\D)/g;
      const rpg = /(\d)/g;
      const jia = sun.match(reg);
      const hui = sun.match(rpg);

      if (sun.length < 6 && sun.length > 0) {
        this.ruo = true;
      } else if (sun.length >= 6 && sun.length < 10) {
        this.zhong = true;
      } else if (sun.length >= 10 || (hui !== null && jia != null)) {
        this.qiang = true;
      } else {
        this.qiang = false;
        this.zhong = false;
        this.ruo = false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/styles/denglu/zhuce.less";
</style>
<style scoped>
body {
  background: white;
}
.el-button--primary {
  background: orange;
  border: none;
}
.el-button--primary a {
  color: #666666;
  text-decoration: none;
  /* border: 1px solid black; */
}
.el-button--primary:hover {
  background: orange;
}
.el-button--primary:focus {
  background: orange;
  margin-bottom: 25px;
}
.el-form-item__error {
  width: 200px;
  position: absolute;
  top: 10px;
  left: 300px;
  color: #999999;
}
.el-form-item__error::after {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  background-image: url(../assets/img/yuan.png);
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: -30px;
}
.el-form-item.el-form-item--feedback.is-error {
  margin-bottom: 22px;
}
</style>
