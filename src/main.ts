import { createApp, createSSRApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = document.getElementById('app')?.hasChildNodes() ? createSSRApp(App) : createApp(App)
app.use(router)
router.isReady().then(() => app.mount('#app'))
