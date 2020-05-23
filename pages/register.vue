<template>
  <div class="sign">
    <!--表单-->
    <div class="main">
      <div class="title">
        <a href="login">登录</a>
        <span>·</span>
        <a class="active" href="register">注册</a>
      </div>
      <div class="sign-up-container">
        <form action="" @submit.prevent="register(name,password)">
          <div class="input-prepend restyle" style="margin-bottom:20px">
            <input v-model="name" type="text" placeholder="你的昵称">
            <i class="iconfont icon-user"></i>
          </div>
          <!-- <div class="input-prepend restyle no-radius">
            <input type="text" placeholder="手机号">
            <i class="iconfont icon-phone"></i>
          </div> -->
          <div class="input-prepend">
            <input v-model="password" type="password" placeholder="设置密码">
            <i class="iconfont icon-password"></i>
          </div>
          <div class="btn">
            <input type="submit" class="sign-up-button" value="注册">
          </div>
          <p class="sign-up-msg">
            点击 “注册” 即表示您同意并愿意遵守简书
            <br>
            <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>
            和
            <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。
          </p>
        </form>
        <!-- 更多注册方式 -->
        <div class="more-sign">
          <h6>社交帐号直接注册</h6>
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
      avatar: 'https://ydl-edu-file.oss-cn-shenzhen.aliyuncs.com/music/my1%20-%20%E5%89%AF%E6%9C%AC.jpg',
      data: {}
    }
  },
  methods: {
    register(name, password) {
      user.register(name, password, this.avatar, 88, 1).then(response => {
        this.data = response.data
        if (this.data.success) { // 注册成功
          this.$router.push('/login')
        } else {
          alert(this.data.message)
        }
      })
    }
  }
}
</script>
