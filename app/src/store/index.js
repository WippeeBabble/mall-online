import Vue from "vue";
import Vuex, { Store } from 'vuex'

// 需要使用插件一次
Vue.use(Vuex)
// 对外暴露Store的一个实例

import home from './home'
import search from './search'


export default new Vuex.Store({
    
    modules:{
        home,
        search
    }
})