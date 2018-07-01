import Vue from 'vue';
import Router from 'vue-router';

import goods from '../components/goods/goods'

Vue.use(Router);

const routes = [
  { path: '/',
    redirect: 'goods'
  },
  {
    path: '/goods',
    component: goods
  }
];

export default new Router({
  linkActiveClass: 'active',
  routes
})
