import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import './assets/main.css'

createApp(App).use(i18n).use(router).mount('#app')
