import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import { Tabbar, TabbarItem, Icon } from 'vant'
import components from './utils/components.js'

Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
