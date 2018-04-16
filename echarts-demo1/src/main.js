import Vue from 'vue'
import App from './App.vue'
/*使用echarts*/
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
/*axios*/
import axios from 'axios'
Vue.prototype.$http=axios




new Vue({
  el: '#app',
  render: h => h(App)
})
