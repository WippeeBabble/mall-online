// state 管理数据的仓库 
const state = {}
// 唯一能修改state的方法
const mutations = {}
// 拥有一些自己的业务逻辑，也可以处理异步
const actions = {}
// 理解为计算属性，可以简化仓库数据，让我们获取仓库数据更方便
const getters = {}

export default {
    namespaced:true,
actions,
state,
mutations,
getters,
}