import './assets/main.css'
import './assets/fonts.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import 'flowbite'
import "preline/preline"

const app = createApp(App)

app.use(router)

app.mount('#app')
