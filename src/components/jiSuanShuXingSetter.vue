<template>
    <div class="">
      {{site}}
    </div>
</template>

<script>
    export default {
        data () {
            return {
              name: 'Google',
              url: 'http://www.google.com'
            }
        },
        props: {},
        computed: {
          site: {
            // getter
            get: function () {
              return this.name + '：' + this.url
            },
            // setter
            set: function (newValue) {
              var names = newValue.split(' ')
              this.name = names[0]
              this.url = names[names.length - 1]
            }
          }
        },
        components: {},
        methods: {},
        watch: {},
    }
</script>
<style scoped>

</style>
