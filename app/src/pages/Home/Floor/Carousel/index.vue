<template>
<div>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="360px">
      <el-carousel-item v-for="(carousel) in list.carouselList" :key="carousel">
        <img :src="carousel.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'


export default {
    // mounted(){
    //     this.$store.dispatch('home/floorList')
    //     console.log('carousel,mouted',)
    // },
    // computed:{
    //     ...mapState({
    //         // bannerList: (state) => state.home.bannerList,
    //         floorList:'floorList'
    //     })
    // }
  props:['list']
}

</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #82a2c6;
  }
</style>