import request from '@/utils/request'
import qs from 'qs'

const api_name = '/microservice/user'

export default {
  register(name, password, avatar, sort, level) {
    let data = {
      name,
      password,
      avatar,
      sort,
      level
    }
    data = qs.stringify(data)
    return request({
      url: `${api_name}/register`,
      method: 'post',
      data
    })
  },
  login(name, password) {
    let data = {
      name,
      password
    }
    data = qs.stringify(data)
    return request({
      url: `${api_name}/login`,
      method: 'post',
      data
    })
  }
}
