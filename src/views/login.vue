<template>
  <div style="background-color:#0058ac;height: 100%" align="middle">
    <div class="login">
      <el-row>
        <el-col :span="24" class="title">艾里克物联网开发平台</el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10" class="hidden-md-and-down login-left" :style="'background-image:url('+ Background +');'" />
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" class="login-right">
          <div class="subtitle">用户登录</div>
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="0px" class="login-form">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="请输入账号">
                <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="请输入密码" @keyup.enter.native="handleLogin">
                <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
              </el-input>
            </el-form-item>
            <!--<el-form-item prop="code">-->
            <!--<el-input v-model="loginForm.code" auto-complete="off" placeholder="验证码" style="width: 63%" @keyup.enter.native="handleLogin">-->
            <!--<svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />-->
            <!--</el-input>-->
            <!--<div class="login-code">-->
            <!--<img :src="codeUrl" @click="getCode">-->
            <!--</div>-->
            <!--</el-form-item>-->
            <el-checkbox v-model="loginForm.rememberMe" style="margin:0 0 25px 0;float:left;">
              记住我
            </el-checkbox>
            <el-form-item style="width:100%;">
              <el-button :loading="loading" size="medium" type="primary" class="loginBtn" @click.native.prevent="handleLogin">
                <span v-if="!loading">登 录</span>
                <span v-else>登 录 中...</span>
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <!--  底部  -->
      <el-row>
        <el-col :span="24">
          <div v-if="$store.state.settings.showFooter" id="el-login-footer">
            <span v-html="$store.state.settings.footerTxt" />
            <span> ⋅ </span>
            <a href="http://www.beian.miit.gov.cn" target="_blank">{{ $store.state.settings.caseNumber }}</a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
// import { encrypt } from '@/utils/rsaEncrypt'
import Config from '@/settings'
import Cookies from 'js-cookie'
// import Background from '@/assets/images/ball.png'
// import Background from '@/assets/images/d.png'
import Background from '@/assets/images/login_left.png'

export default {
  name: 'Login',
  data() {
    return {
      Background: Background,
      codeUrl: '',
      cookiePass: '',
      loginForm: {
        username: '',
        password: '',
        rememberMe: false,
        code: '',
        uuid: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }],
        code: [{ required: true, trigger: 'change', message: '验证码不能为空' }]
      },
      loading: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    this.getCode()
    this.getCookie()
  },
  methods: {
    getCode() {
      // getCodeImg().then(res => {
      //   this.codeUrl = res.img
      //   this.loginForm.uuid = res.uuid
      // })
    },
    getCookie() {
      const username = Cookies.get('username')
      let password = Cookies.get('password')
      const rememberMe = Cookies.get('rememberMe')
      // 保存cookie里面的加密后的密码
      this.cookiePass = password === undefined ? '' : password
      password = password === undefined ? this.loginForm.password : password
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password,
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
        code: ''
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        const user = {
          username: this.loginForm.username,
          password: this.loginForm.password,
          rememberMe: this.loginForm.rememberMe,
          code: this.loginForm.code,
          uuid: this.loginForm.uuid
        }
        // if (user.password !== this.cookiePass) {
        //   user.password = encrypt(user.password)
        // }
        if (valid) {
          this.loading = true
          if (user.rememberMe) {
            Cookies.set('username', user.username, { expires: Config.passCookieExpires })
            Cookies.set('password', user.password, { expires: Config.passCookieExpires })
            Cookies.set('rememberMe', user.rememberMe, { expires: Config.passCookieExpires })
          } else {
            Cookies.remove('username')
            Cookies.remove('password')
            Cookies.remove('rememberMe')
          }
          this.$store.dispatch('Login', user).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
            this.getCode()
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .login {
    top: 10%;
    position: relative;
    padding:30px;
  }

  .title {
    text-align: center;
    padding-bottom: 20px;
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 5px;
  }

  .subtitle {
    padding-top: 10px;
    font-size: 25px;
    text-align: center;
    color:#0064c8;
  }

  .login-left, .login-right {
    padding: 10px 0 10px 0;
    height:320px;
  }

  .login-left {
    background-repeat: no-repeat;
    background-position: center center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-size: auto 100%;
  }

  .login-right {
    color:#fff;
    background: #fff;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }

  @media screen and (max-width: 600px) {
    .title{
      font-size: 25px;
    }
    .subtitle{
      font-size: 20px;
    }
    .subtitle, .login-right {
      color: #fff;
    }
    .login-right {
      background: #10224b;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }

  .el-form-item {
    margin-bottom: 25px;
  }

  .loginBtn {
    width: 100%;
    background-color:#24457c;
    border-color: #24457c;
  }
  .login-form {
    padding: 20px;
    .el-input {
      height: 38px;
      input {
        font-size:15px;
        border:0;
        border-bottom:1px solid silver;
        background-color: rgba(0, 0, 0, 0);// 透明背景
        border-radius:0; // 设置圆角
      }
    }
    .input-icon{
      margin-bottom:10px;
      height: 39px; width: 14px; margin-left: 2px;
    }
  }
  .login-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
  }
  .login-code {
    width: 33%;
    display: inline-block;
    height: 38px;
    float: right;
    img{
      cursor: pointer;
      vertical-align:middle
    }
  }

</style>
