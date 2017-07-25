import Vue from 'vue'
import App from './components/App.vue'
import Quasar from 'quasar-framework'
import { router } from './router';

Vue.use(Quasar) // Install Quasar Framework

Quasar.start(() => {
	new Vue({
		el: '#app',
		router,
		render: h => h(App)
	})
})


