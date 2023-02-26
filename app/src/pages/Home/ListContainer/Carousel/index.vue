<template>
<div>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="454px">
      <el-carousel-item v-for="(item) in bannerList" :key="item.id">
        
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default{
    mounted(){
        this.$store.dispatch('home/bannerList')
        let a = 0.1 + 0.2
        console.log('carousel,mouted',a)
    },
    computed:{
        ...mapState({
            bannerList: (state) => state.home.bannerList

        })
    }
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
     background-color: #d3dce6;
  }
</style>