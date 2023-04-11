import { createApp } from 'vue'
import stores from './stores/index'
import App from './App'
import router from './router'

import './assets/styles/main.css'

const app = createApp(App)

app.use(stores)
app.use(router)

app.mount('#app')
