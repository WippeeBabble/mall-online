<template>
    <div>
          <!-- 商品分类导航 -->
          <div class="type-nav">
            <div class="container"  @mouseleave="leaveIndex(),leaveShow()" @mouseenter="enterShow">
                <h2 class="all"  >全部商品分类</h2>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                <div class="sort" v-show="show">
                    <div class="all-sort-list2" @click="goSearch">
                            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex==index}">
                            <h3 @mouseenter="changeIndex(index)">
                                <a href="javascript:;" :data-category1Id="c1.categoryId" :data-categoryName="c1.categoryName">{{ c1.categoryName }}</a>
                            </h3>
                            <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                                <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a href="javascript:;" :data-category2Id="c2.categoryId" :data-categoryName="c2.categoryName"> {{ c2.categoryName }}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                                <a  href="javascript:;" :data-category3Id="c3.categoryId" :data-categoryName="c3.categoryName">{{ c3.categoryName }}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import throttle from 'lodash/throttle'

export default {
    name:'TypeNav',
    data(){
        return {
            currentIndex : -1,
            show:true
            }
    },
    methods:{
        // changeIndex: throttle( function (index){
        //     this.currentIndex = index;
        //     console.log(111);
        // },50), 
        changeIndex: function (index){
            this.currentIndex = index;
        },

        leaveIndex(){
            this.currentIndex = -1;
        },
        
        // 编程式路由导航+事件委托 既节省内存，且完成任务
        goSearch(event){
            let element = event.target;
            let {category1id,category2id,category3id,categoryname} = element.dataset;
            console.log('element.dataset',element.dataset);
            if(categoryname){
                let location = { name: 'search'}
                const query = {categoryName:categoryname}

                if(category1id){
                    query.category1Id = category1id
                }else if(category2id){
                    query.category2Id = category2id
                }else{
                    query.category3Id = category3id
                }
                location.query = query;
                // 就这里卡住了
                // 不是element.$router 而是this.$router
                // mdb this是vc，element是 a标签
            this.$router.push(location)
            console.log(this,element);
            }
        },

        // search 路由里面显示隐藏表格
        enterShow(){
                this.show = true
        },
        leaveShow(){
            if (this.$route.path !== '/home'){
                this.show = false
            }
        }
    },
    // 挂载完毕，可以向服务器发请求
    mounted(){
    // @如果写在这里，每次typenav挂载都会申请一次，但多个页面会用这个组件，页面跳转就会频繁申请
    // 所以写在app里面，直接store仓库里面就有了
        // 通知vuex发请求，获取数据，存储到仓库之中
        // this.$store.dispatch('categoryList');

        if(this.$route.path !== '/home'){
            this.show = false
        }
    },
    computed:{
        ...mapState({
            // 右边需要的是一个函数，每次使用这个计算属性时，右侧函数会马上计算一次

            categoryList:(state) => {
                return state.home.categoryList
            }
        })
    }
}
</script>

<style scoped lang="less">

        .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;
 
                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &:hover {
                            .item-list {
                                display: block;
                            }
                        }
                        // .dis{
                        //         display: block;
                        // }
                    }
                    .cur{
                        background: skyblue;
                    }
                }
            }
        }
    }


</style>