<template>
  <div class="container">
    <div class="ll">
      <h2>业务研发中....</h2>
      <h3>请耐心等待喔~亲</h3>
      <h3>系统会第一时间通知您</h3>
      <nuxt-link to="/"><p class="ls">首 页</p></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: 'sign' // 你可以为错误页面指定自定义的布局
}
</script>
<style>
.ll {
  padding:5% 30%;
}
.ls{
  font-size: 28px;
  margin-top: 30px;
  margin-left: 30px;
}
</style>

