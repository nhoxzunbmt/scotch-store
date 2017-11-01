// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import Greeting from './Greeting.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
let counter = 0

new Vue({
  el: '#app',
  router,
  template: '<Greeting/>',
  components: {Greeting},
  data () {
    return {
      counter
    }
  },
  methods: {
    incrementCounter () {
      this.counter++
      console.log(this.counter)
    }
  }
})
