import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './presentation/router'
import App from './App.vue'

// Importing CSS 
import '@fortawesome/fontawesome-free/css/all.min.css'
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/css/main.css'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
