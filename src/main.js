import { createApp } from 'vue'
import App from './App.vue'
import vuex from './store/index'
import './assets/css/reset/reset.css';
import './assets/css/fontawesome/css/all.min.css';
import './assets/css/animate.css/animate.css';

const app = createApp(App)


app.use(vuex).mount('#app')
