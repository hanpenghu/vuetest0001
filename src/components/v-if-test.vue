<template>
  <div id="app">
    <p v-if="seen1">现在你看到我了</p>
    <template v-if="ok1">
      <h1>菜鸟教程</h1>
      <p>学的不仅是技术，更是梦想！</p>
      <p>哈哈哈，打字辛苦啊！！！</p>
    </template>
  </div>
</template>

<script>
    export default {
        data () {
            return {
            seen1: true,
              ok1: true
            }
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
