<template>
  <div class="sign">
    <!--表单-->
    <div class="main">
      <div class="title">
        <a class="active" href="login">登录</a>
        <span>·</span>
        <a href="register">注册</a>
      </div>
      <div class="sign-up-container">
        <form action="" @submit.prevent="login(name, password)">
          <div class="input-prepend restyle" style="margin-bottom:20px;">
            <input v-model="name" type="text" placeholder="昵称">
            <i class="iconfont icon-phone"></i>
          </div>
          <div class="input-prepend">
            <input v-model="password" type="password" placeholder="密码">
            <i class="iconfont icon-password"></i>
          </div>
          <div class="btn">
            <input type="submit" class="sign-in-button" value="登录">
          </div>
        </form>
        <!-- 更多登录方式 -->
        <div class="more-sign">
          <h6>社交帐号登录</h6>
          <ul>
            <li>
              <a id="weixin" class="weixin" target="_blank" href="#">
                <i class="iconfont icon-weixin"></i>
              </a>
            </li>
            <li>
              <a id="qq" class="qq" target="_blank" href="#">
                <i class="iconfont icon-qq"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/sign.css'
import '~/assets/css/iconfont.css'
import user from '@/api/user'

export default {
  layout: 'sign',
  data() {
    return {
      name: '',
      password: '',
      data: {}
    }
  },
  methods: {
    login(name, password) {
      user.login(name, password).then(response => {
        this.data = response.data
        if (this.data.success) { // 登录成功，返回上一个页面
          // this.$router.go(-1) // 跳转到上一次页面，即后退一步
          window.localStorage.setItem('user', JSON.stringify(this.data.data.user))
          console.log('登录后跳转')
          this.$router.push('/') // 跳转到指定目录
          // this.$router.push({ path: '/', query: { user: this.data.data.user }})
        } else {
          alert(this.data.message)
        }
      })
    }
  }
}
</script>
