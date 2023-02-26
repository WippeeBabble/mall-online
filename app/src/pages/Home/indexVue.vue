<template>
    <div>
        <type-nav></type-nav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="(floor) in floorList" :key="floor.id" :list='floor'></Floor>
        <!-- <Floor></Floor> -->
        <Brand></Brand>
    </div>
</template>  

<script>
// 引入剩余组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

import {mapState} from 'vuex'

export default {
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    computed:{
        ...mapState({
            floorList:state => state.home.floorList
            // floorList:'home/floorList'
        })
    },
    mounted() {
        console.log('请求了floor');
        this.$store.dispatch('home/floorList')
    }
}
</script>

<style>

</style>