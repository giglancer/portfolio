import Vue from 'vue';
import Router from 'vue-router';
import WeatherClock from './pages/WeatherClock.vue'
import Qr from './pages/qr.vue'
import Home from './pages/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home 
    },
    {
    path: '/weatherClock',
    component: WeatherClock
    },
    {
    path: '/qr',
    component: Qr
    }
  ]
});
