import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use( VueSplide );

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCvGwNoPAXOoL2IBenSS9xYBKm23PBqMcQ',
    libraries: 'places', 
    mapId: 'ac2d6cebf2dec018',
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
