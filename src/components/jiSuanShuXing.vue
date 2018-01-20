<template>
    <div class="">
      {{ message.split('') }}
    <br/>
      {{ message.split('').reverse().join('') }}
    </div>
</template>

<script>
    export default {
        data () {
            return {
              message: 'Runoob!'
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
