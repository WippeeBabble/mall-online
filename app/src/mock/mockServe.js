import Mock from 'mockjs'

import banner from './banner'

import floor from './floor'

// mock数据:第一个参数是地址，第二个参数：请求数据
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})