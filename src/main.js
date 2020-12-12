import { createApp } from 'vue'
import App from './App.vue'
import vuex from './store/index'

const app = createApp(App)


app.use(vuex).mount('#app')
