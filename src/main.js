import Vue from "vue";
import router from "./router";
import axios from "axios";
import Element from "element-ui";
import GlobalLayout from "@/layout/globalLayout";
import store from "./store/index";
import "./assets/css/icon.css";
import './assets/css/theme/element-variables.scss';
import {API} from '@/api';

Vue.config.productionTip = false;
Vue.use(Element, {
  size: "small"
});

Vue.prototype.$axios = axios;
Vue.prototype.$API = API;


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem("ms_username");
  if (!role && to.path !== "/login") {
    next("/login");
  } else if (to.meta.permission) {
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === "admin" ? next() : next("/403");
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf("MSIE") > -1 && to.path === "/editor") {
      Vue.prototype.$alert(
        "vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看",
        "浏览器不兼容通知",
        {
          confirmButtonText: "确定"
        }
      );
    } else {
      next();
    }
  }
});

const Bus = new Vue();

new Vue({
  el: '#root',
  router,
  data:{
   Bus 
  },
  store,
  components: { GlobalLayout },
  template: '<GlobalLayout/>'
});

if (module.hot) {
  module.hot.accept();
}