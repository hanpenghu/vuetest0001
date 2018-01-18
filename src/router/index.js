import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import haha01 from '@/components/haha001'
import login from '@/components/login'
import Layouts from '@/components/layouts' // 导入layouts.vue 组件
import vif from '@/components/v-if-test'
import vfor from '@/components/v-for-test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect: '/',
      // name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/haha01',
      component: haha01,
      //下面这个要配合<router-view></router-view>这个使用
       children:[
         { path: 'login', component: login}
       ]
    },
    {
      path: '/Layouts',  //访问路径
      name: 'Layouts', // 路径名
      component: Layouts //访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    },
    {
      path: '/vif',
      // redirect: '/',
      // name: 'HelloWorld',
      component: vif
    },
    {
      path: '/vfor',
      // redirect: '/',
      // name: 'HelloWorld',
      component: vfor
    },
    // {
    //   path: '/haha01/login',
    //   component: login
    // },
  ]
})
