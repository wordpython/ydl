import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://47.112.103.249:8210', // api的base_url
  timeout: 20000 // 请求超时时间
})

export default service
