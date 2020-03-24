import Vue from 'vue'
import App from './components/App.vue'
import { store } from './store/store'
import './style/index.less'
import router from './router.js'

export const bus = new Vue()
new Vue({
    render: h => h(App),
    store: store,
    router: router,
}).$mount('#app')