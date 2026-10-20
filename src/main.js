import { createApp } from 'vue'
import App from './App.vue'
import { createSSRRouter } from './router'
import './style.css'

const router = createSSRRouter()
const app = createApp(App)
app.use(router)

router.isReady().then(() => {
    app.mount('#app', true)
})