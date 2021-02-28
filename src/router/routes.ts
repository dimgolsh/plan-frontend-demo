import { RouteConfig } from 'vue-router'
import { LocalStorage } from 'quasar'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "EventsList" */'pages/Index.vue'),
        name: 'EventsList',
      },
      {
        path: 'add-event',
        name: 'AddEvent',
        component: () => import(/* webpackChunkName: "AddEvent" */'pages/AddEvent.vue'),
      },
      {
        path: 'event/:id',
        name: 'EventView',
        component: () => import(/* webpackChunkName: "EventView" */'pages/EventView.vue'),
      },
      {
        path: 'edit/:id',
        name: 'EventEdit',
        component: () => import(/* webpackChunkName: "EventEdit" */'pages/EditEvent.vue'),
      }
    ],
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */'pages/login.vue'),
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter(to, from, next) {
      LocalStorage.clear()
      next({ name: 'Login' })
    },
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
