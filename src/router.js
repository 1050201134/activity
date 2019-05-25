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
      redirect: {
        name: 'signUp'
      },
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
        },
        {
          path: 'activityManager',
          name: 'activityManager',
          component: () => import('./components/ActivityManager.vue')
        }
      ]
    },
    {
      path: '/manager',
      name: 'manager',
      redirect: {
        name: 'peopleManager'
      },
      component: () => import('./views/Manager.vue'),
      children: [
        {
          path: 'peopleManager',
          name: 'peopleManager',
          component: () => import('./views/PeopleManager.vue')
        }
      ]
    }
  ]
})
