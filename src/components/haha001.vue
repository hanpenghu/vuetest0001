<template>
    <div class="">
      <h1>{{msg}}</h1>
      <router-link to="/haha01/login">登录</router-link>
      <!-- 下面这玩意其实是告诉我们引入路由装备,从而实现二级路由-->
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {msg:"哈哈哈77868001"}
        },
        props: {},
        computed: {},
        components: {},
        methods: {},
        watch: {},
    }

</script>

<style scoped>

</style>
