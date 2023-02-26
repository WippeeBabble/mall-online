<template>
    <div @click="show">
        <TypeNav></TypeNav>
        <!-- <h1>parmas参数 ---{{ $route.query.categoryName }}</h1> -->
        <!-- <h1>query参数---{{ $route.query.category1Id }}</h1> -->
    </div>
</template>

<script>
export default {

    methods:{
        show(){
            console.log(this.$route);
        }
    }
}
</script>

<style>  

</style>