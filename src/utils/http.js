import axios from 'axios';
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //进度条样式
NProgress.configure({     
       easing: 'ease',  // 动画方式    
       speed: 500,  // 递增进度条的速度    
       showSpinner: false, // 是否显示加载ico    
       trickleSpeed: 200, // 自动递增间隔    
       minimum: 0.3 // 初始化时的最小百分比
});
const instance = axios.create({
  // baseURL:'/api/v1', // api的前缀
  // timeout: 5000 // 设置请求超市
})

// 请求拦截添加头部参数等
instance.interceptors.request.use(config => {
  //config.headers['X-Token'] = getToken()
  NProgress.start(); //开始
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(
  response => {
    NProgress.done(); // 结束
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
