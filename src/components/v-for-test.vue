<template>
    <div class="">
      <ol>
        <li v-for="site in sites">
          {{ site.name }}
        </li>
      </ol>
    </div>
</template>

<script>
    export default {
        data () {
            return {
              sites: [
                { name: 'Runoob' },
                { name: 'Google' },
                { name: 'Taobao' }
              ]
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
