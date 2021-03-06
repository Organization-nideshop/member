import axios from 'axios'
import { Toast } from 'mint-ui'
const generateApiMap = (map) => {
  let facade = {}
  _.forEach(map, function (value, key) {
    facade[key] = toMethod(value)
  })
  return facade
}
const toMethod = (options) => {
  options.method = options.method || 'post'
  return (params = {}, attachedParams, config = {}) => {
    params = _.extend(params, attachedParams)
    return sendApiInstance(options.method, options.url, params, config)
  } } // 创建axios实例
  const createApiInstance = (config = {}) => {
    const _config = {
      withCredentials: true, // 跨域
      baseURL: ''
    }
    config = _.merge(_config, config)
    return axios.create(config) }
    const err_check = (code, message, data) => {
      if (code ==200){
        return true
      }
      return false
    }
    const sendApiInstance = (method, url, params, config = {}) => {
      if(!url){
        return
      }
      let instance = createApiInstance(config)
      instance.interceptors.response.use(response => {
        let {code, message, data} = response.data
        if (err_check(code, message, data) && data) {
          return Promise.resolve(data)
        } else {
          return Promise.reject(data)
        } }, error => {
          Toast({
            message: error.response || error.message, duration: 3000
          })
          return Promise.reject(error).catch(res => {
            console.log(res) })
          } )
          if (method === 'get') {
            params = { params: params }
          }
          return instance[method](url, params, config)
        }
export default { generateApiMap }

// import apiUrl from './apiUri'
// import apiUtil from './apiUtil'
// const generateApiMap = apiUtil.generateApiMap({...apiUrl})
// export default { ...generateApiMap
//   // 取出所有可遍历属性赋值在新的对象上
// }

