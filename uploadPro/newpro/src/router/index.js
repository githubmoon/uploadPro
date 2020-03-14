/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UpLoad from '@/components/upload/UpLoad'
import Bootstrap from '@/components/upload/Bootstrap'
import Element from '@/components/upload/Element'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/upload',
      name: 'upload',
      component: UpLoad,
      children:[{
        path: 'boot',
        name: 'Bootstrap',
        component: Bootstrap,
      },
      {
        path: 'elemt',
        name: 'Element',
        component: Element,
      },
      {
        path: '',
        name: 'Bootstrap',
        component: Bootstrap,
      }]
    }
  ]
})
