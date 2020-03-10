import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/engineering-works',
    name: 'engineering-works',
    meta: {
      layout: 'empty'
    },
    component: () => import('@/views/EngineeringWorks.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/404.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/About.vue')
  },
  {
    path: '/affiliate-program',
    name: 'affiliate-program',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/AffiliateProgram.vue')
  },
  {
    path: '/answers',
    name: 'answers',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Answers.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Blog.vue')
  },
  {
    path: '/blog-article',
    name: 'blog-article',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/BlogArticle.vue')
  },
  {
    path: '/error-payment',
    name: 'error-payment',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/ErrorPayment.vue')
  },
  {
    path: '/news',
    name: 'news',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/News.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Payment.vue')
  },
  {
    path: '/reviews',
    name: 'review',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Reviews.vue')
  },
  {
    path: '/status',
    name: 'status',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Status.vue')
  },
  {
    path: '/successful-payment',
    name: 'successful-payment',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/SuccessfulPayment.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router