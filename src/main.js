import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: (el, binding, vnode, oldVnode) => {
    // console.log(this)
    // console.log(el, binding, vnode, oldVnode)
    el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
