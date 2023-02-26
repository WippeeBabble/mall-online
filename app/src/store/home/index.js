import { reqBannerList, reqCategoryList , reqFloorList} from "@/api"

// state 管理数据的仓库 
const state = {
    // 写一个初始值
    categoryList:[],
    bannerList:[],
    floorList:[]
}

// 唯一能修改state的方法
const mutations = {
    CATEGORYLIST(state,categorylist){
        categorylist.pop()
        state.categoryList = categorylist;
    },
    BANNERLIST(state,bannerList){
        state.bannerList= bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList;
    }
}

// 拥有一些自己的业务逻辑，也可以处理异步
const actions = {
    // 通过API里面的 接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        console.log(result);
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    },
    async bannerList({commit}){
        let result = await reqBannerList();
        console.log('进入mock');
        if (result.code == 200){
            commit("BANNERLIST",result.data)
            console.log('mock获取成功',result.data);
        } 
    },
    async floorList({commit}){
        let result = await reqFloorList()
        if(result.code == 200){
            console.log('action发起了请求，获得了result');
            commit("FLOORLIST",result.data)
        }
    }
}

// 理解为计算属性，可以简化仓库数据，让我们获取仓库数据更方便
const getters = {
}

export default {
namespaced:true,
actions,
state,
mutations,
getters,
}