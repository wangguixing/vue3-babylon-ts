/*
 * @Author: wangguixing
 * @Date: 2023-08-21 09:44:06
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-08-21 09:50:09
 * @FilePath: \src\main.ts
 */
import { createApp } from 'vue'
import stores from './stores/index'
import App from './App'
import router from './router'

import './assets/styles/main.css'

const app = createApp(App)

app.use(stores)
app.use(router)

app.mount('#app')
