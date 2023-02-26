<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home，search的时候显示，在登录，注册的时候隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/indexVue.vue';
import Footer from './components/Footer/indexVue.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
        this.$store.dispatch('home/categoryList');
    
  }
}
</script>

<style lang="less">

</style>
