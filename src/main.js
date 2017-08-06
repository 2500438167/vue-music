import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// import router from './router'

// Vue.config.productionTip = false

import fastclick from 'fastclick'
import 'common/stylus/index.styl'

// 去掉三百毫秒延时
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
