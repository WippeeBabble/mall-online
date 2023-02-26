import requests from './requests'

import mockServe from './mockServe'

export const reqCategoryList = () => {
    return requests({
        url:'api/product/getBaseCategoryList',methed:'get'
    })
} 
export const reqBannerList = () => {
    return mockServe({
        url:'/banner',methed:'get'
    })
}
export const reqFloorList = () => {
    return mockServe({
        url:'/floor',method:'get'
    })
}