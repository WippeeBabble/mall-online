import Vue from 'vue'
import App from './App.vue'
// 三级联动组件---注册为全局组件
import TypeNav from '@/components/TypeNav/index'
// 第一个参数全局组件的名字，第二个参数，哪一个组件
Vue.component(TypeNav.name,TypeNav)

// 消除默认样式
import '@/assets/style/reset.css' 
//引入swiper样式
import 'swiper/css/swiper.css' 

// 引入路由
import router from '@/router'
Vue.config.productionTip = false

// 引入仓库
import store from '@/store'

// 引入mock 让他执行一次
import '@/mock/mockServe';
// // 测试axios二次封装出来的requests
// import {reqCategoryList} from '@/api'
// reqCategoryList();

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


new Vue({
  render: h => h(App),
  // 注册路由信息
  // 注册路由信息 ，这里书写router之后，所有的组件身上都有@router，@route属性
  router,
  store,
}).$mount('#app')

// @route 一般获取路由信息 query参数parms参数等等
// @router  一般进行编程式路由导航,它可以在其他的业务逻辑 比如登录界面页面账号的提交、验证
