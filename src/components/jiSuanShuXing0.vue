<template>
    <div class="">
      <p>原始字符串: {{ message }}</p>
      <p>计算后反转字符串: {{ reversedMessage1 }}</p>
      <p>计算后反转字符串: {{ reversedMessage2}}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {message: 'Runoob!'}
        },
        props: {},
        computed: { // 计算属性的 getter
          reversedMessage1:function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
          }
        },
        components: {},
        methods: {
            reversedMessage2: function () {
              return this.message.split('').reverse().join('')
            }
        },
        watch: {},
    }

</script>

<style scoped>

</style>
