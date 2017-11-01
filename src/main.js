// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
let counter = 0

const GreetingComponent = {
  template: `<h1>Hi, you!</h1>`
}
Vue.component('product', {
  template: '<div class="card">...</div>'
})
new Vue({
  el: '#app',
  router,
  template: `
         <div>
        <GreetingComponent/>
    </div>
  `,
  components: {GreetingComponent},
  data () {
    return {
      counter
    }
  },
  methods: {
    incrementCounter () {
      this.counter++
    }
  }
})
