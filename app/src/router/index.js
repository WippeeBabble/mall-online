import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/pages/Home/indexVue'
import Search from '@/pages/Search/indexVue'
import Register from '@/pages/Register/indexVue'
import Login from '@/pages/Login/indexVue'

// 配置路由
export default new VueRouter({
    // 配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search/:keyword",
            component:Search,
            meta:{show:true},
            name:'search'
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:'*',
            redirect:Home,
            meta:{show:true}
        },
    ]
})