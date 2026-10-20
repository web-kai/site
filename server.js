import express from 'express'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import { createServer as createViteServer } from 'vite'

const __dirname = dirname(fileURLToPath(
    import.meta.url))
const isProd = process.env.NODE_ENV === 'production'

async function createApp() {
    const app = express()

    let vite
    if (!isProd) {
        vite = await createViteServer({
            server: { middlewareMode: true },
            appType: 'custom'
        })
        app.use(vite.middlewares)
    } else {
        app.use(express.static(resolve(__dirname, 'dist/client'), { index: false }))
    }

    app.get('*', async(req, res) => {
        try {
            const url = req.originalUrl

            let template, render
            if (!isProd) {
                const rawTemplate = readFileSync(resolve(__dirname, 'index.html'), 'utf-8')
                template = await vite.transformIndexHtml(url, rawTemplate)
                const entry = await vite.ssrLoadModule('/src/entry-server.js')
                render = entry.render
            } else {
                template = readFileSync(resolve(__dirname, 'dist/client/index.html'), 'utf-8')
                const serverEntryUrl = pathToFileURL(
                    resolve(__dirname, 'dist/server/entry-server.js')
                ).href
                const mod = await
                import (serverEntryUrl)
                render = mod.render
            }

            const appHtml = await render(url)
            const html = template.replace('<!--app-html-->', appHtml)

            res.status(200)
                .setHeader('Content-Type', 'text/html; charset=utf-8')
                .end(html)
        } catch (e) {
            if (!isProd && vite) vite.ssrFixStacktrace(e)
            console.error(e)
            res.status(500).end(e.stack)
        }
    })

    return { app, vite }
}

createApp().then(({ app }) => {
    const port = process.env.PORT || 5173
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })
})