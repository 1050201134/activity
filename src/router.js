import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'index'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: 'signUp',
          name: 'signUp',
          component: () => import('./components/SignUp.vue')
        },
        {
          path: 'myActivity',
          name: 'myActivity',
          component: () => import('./components/MyActivity.vue')
        }
      ]
    }
  ]
})
