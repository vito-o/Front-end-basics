import express from 'express'
import { createApp } from './app.js'
import { renderToString } from 'vue/server-renderer'

const server = express()

server.use(express.static('.'))

server.get('/', (req, res) => {
  const app = createApp()

  renderToString(app).then(html => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Vue SSR Example</title>
        </head>
        <body>
          <div id="app">${html}</div>
          <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
          </script>
          <script type="module" src="/client.js"></script>
        </body>  
      </html>
    `)
  })
})

server.listen(3000, () => {
  console.log('ready')
})