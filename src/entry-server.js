import { createApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import App from './App.vue'
import { createSSRRouter } from './router'

export async function render(url) {
    const router = createSSRRouter()
    const app = createApp(App)
    app.use(router)

    router.push(url)
    await router.isReady()

    const html = await renderToString(app)
    return html
}