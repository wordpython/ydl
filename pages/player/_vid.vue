<template>
  <div>
    <!-- 阿里云视频播放器样式 -->
    <link
      rel="stylesheet"
      href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css"
    >
    <!-- 启用私有加密的防调式：生产环境使用 -->
    <script src="https://g.alicdn.com/de/prismplayer/2.8.0/hls/aliplayer-vod-anti-min.js"/>
    <!-- 阿里云视频播放器脚本 -->
    <script
      charset="utf-8"
      type="text/javascript"
      src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js"
    />
    <!-- 阿里云视频播放器组件 -->
    <script type="text/javascript" charset="utf-8" src="https://player.alicdn.com/aliplayer/presentation/js/aliplayercomponents.min.js"/>

    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player"/>
  </div>
</template>
<script>
import vod from '@/api/vod'
export default {
  layout: 'video', // 应用video布局
  asyncData({ params, error }) {
    return vod.getPlayAuth(params.vid).then(response => {
      // console.log(response.data.data)
      return {
        vid: params.vid,
        playAuth: response.data.data.playAuth
      }
    })
  },
  /**
   * 页面渲染完成时：此时js脚本已加载，Aliplayer已定义，可以使用
   * 如果在created生命周期函数中使用，Aliplayer is not defined错误
   */
  mounted() {
    /* eslint-disable no-undef */
    const player = new Aliplayer(
      {
        id: 'J_prismPlayer',
        vid: this.vid, // 视频id
        playauth: this.playAuth, // 播放凭证
        encryptType: '1', // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
        width: '100%',
        height: '500px',
        /* 重新定义按钮位置*/
        'extraInfo': {
          'crossOrigin': 'anonymous'
        },
        'skinLayout': [
          { 'name': 'bigPlayButton', 'align': 'blabs', 'x': 30, 'y': 80 },
          { 'name': 'H5Loading', 'align': 'cc' },
          { 'name': 'errorDisplay', 'align': 'tlabs', 'x': 0, 'y': 0 },
          { 'name': 'infoDisplay' },
          { 'name': 'tooltip', 'align': 'blabs', 'x': 0, 'y': 56 },
          { 'name': 'thumbnail' },
          {
            'name': 'controlBar', 'align': 'blabs', 'x': 0, 'y': 0,
            'children': [
              { 'name': 'progress', 'align': 'blabs', 'x': 0, 'y': 44 },
              { 'name': 'playButton', 'align': 'tl', 'x': 15, 'y': 12 },
              { 'name': 'timeDisplay', 'align': 'tl', 'x': 10, 'y': 7 },
              { 'name': 'fullScreenButton', 'align': 'tr', 'x': 10, 'y': 12 },
              { 'name': 'subtitle', 'align': 'tr', 'x': 15, 'y': 12 },
              { 'name': 'setting', 'align': 'tr', 'x': 15, 'y': 12 },
              { 'name': 'volume', 'align': 'tr', 'x': 5, 'y': 10 },
              { 'name': 'snapshot', 'align': 'tr', 'x': 10, 'y': 12 }
            ]
          }
        ],
        components: [
          {
            name: 'BulletScreenComponent', // 跑马灯组件
            type: AliPlayerComponent.BulletScreenComponent,
            /** 跑马灯组件三个参数 text, style, bulletPosition
               * text: 跑马灯文字内容
               * style: 跑马灯样式
               * bulletPosition: 跑马灯位置, 可选的值为 'top' (顶部), 'bottom' (底部), 'random' (随机), 不传值默认为 'random'
               */
            args: ['弹幕TODO', { fontSize: '16px', color: '#00c1de' }, 'random']
          }
        ]
      },
      function(player) {
        console.log('播放器创建成功')
      }
    )
    /* h5截图按钮, 截图成功回调 */
    player.on('snapshoted', function(data) {
      var pictureData = data.paramData.base64
      var downloadElement = document.createElement('a')
      downloadElement.setAttribute('href', pictureData)
      var fileName = 'Aliplayer' + Date.now() + '.png'
      downloadElement.setAttribute('download', fileName)
      downloadElement.click()
      pictureData = null
    })
  }
}
</script>
