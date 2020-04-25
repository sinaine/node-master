import axios from 'axios'
import {Message} from 'element-ui'
import qs from 'qs'
// 创建一个错误
function errorCreate(msg) {
  const error = new Error(msg)
  errorLog(error)
  throw error
}

// 记录和显示错误
function errorLog(error) {
  // 添加到日志
  // store.dispatch('d2admin/log/push', {
  //   message: '数据请求异常',
  //   type: 'danger',
  //   meta: {
  //     error
  //   }
  // })
  // 打印到控制台
  if (process.env.NODE_ENV === 'development') {
    // util.log.danger('>>>>>> Error >>>>>>')
    console.log(error)
  }
  // 显示提示
  Message({
    message: '数据请求异常',
    type: 'error',
    duration: 5 * 1000
  })
}

//   创建一个axios实例

let service = axios.create({
  timeout: 10 * 1000
})
//  请求拦截器
service.interceptors.request.use(function (config) {
  config.paramsSerializer = (params) => {
    return qs.stringify(params, {
      arrayFormat: 'repeat'
    })
  }

  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
  let data = response.data
  const {
    code
  } = data
  if (code === undefined) {
    return data
  } else {
    switch (code) {
      case code < 400:

        return data;
      case code >= 400:
        errorCreate(`[ code: xxx ] ${dataAxios.msg}: ${response.config.url}`)
        break;
      default:
        break;
    }
  }
}, (error) => {
  Message({
    type: 'error',
    duration: 5 * 1000,
    message: error.message
  })
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '请求错误';
        break
      case 401:
        error.message = '未授权，请登录';
        break
      case 403:
        error.message = '拒绝访问';
        break
      case 404:
        error.message = `请求地址出错: ${error.response.config.url}`;
        break
      case 408:
        error.message = '请求超时';
        break
      case 500:
        error.message = '服务器内部错误';
        break
      case 501:
        error.message = '服务未实现';
        break
      case 502:
        error.message = '网关错误';
        break
      case 503:
        error.message = '服务不可用';
        break
      case 504:
        error.message = '网关超时';
        break
      case 505:
        error.message = 'HTTP版本不受支持';
        break
      default:
        break
    }
  }
  errorLog(error)
  return Promise.reject(error)
})
export default service
