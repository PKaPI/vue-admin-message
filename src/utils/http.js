import axios from 'axios'
const instance = axios.create({
  // baseURL:'/api/v1', // api的前缀
  // timeout: 5000 // 设置请求超市
})

// 请求拦截添加头部参数等
instance.interceptors.request.use(config => {
  //config.headers['X-Token'] = getToken()
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(
  response => {
    switch(response.status){
      case 200:
      return response.data;
      case  401:
      return;
      default:
      return Promise.reject('error');
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  })


const http = {
  post(url, data) {
    return instance({
      url,
      data,
      method: 'post',
    })
  },
  get(url, params) {
    console.log(url, params)
    return instance({
      url,
      params,
      method: 'get',
    })
  },
  postFormData(url,data){
    return instance({
      url,
      data, //formdata形式传入
      method: 'post'
    })
  }
}

export default http;
