import Vue from 'vue'
import App from './App.vue'
import slick from 'vue-slick'
import router from './router'

Vue.config.productionTip = false

Vue.use(slick)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
