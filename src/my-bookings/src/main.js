import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('dateResume', function(value) {
  if (value) {
    return moment(String(value)).format('DD MMM')
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
