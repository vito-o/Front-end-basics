const path = require('path')
const fs = require('fs')

export default (options) => ({
  name: 'configure-server',
  configureServer(server) {
    return () => {
      server.middlewares.use((req, res, next) => {
        if(req.originalUrl == '/api/users'){
          let cDir = path.join(process.cwd(), 'mock')
          let stat = fs.statSync(cDir)
          if(stat.isDirectory()) {
            const result = require(cDir)
            let info = result.find(o => o.url == req.originalUrl)
            if(info) {
              let dataJson = JSON.stringify(info.info)
              res.setHeader('Content-Type', 'application/json')
              res.end(dataJson)
            }
          }
        } else {
          next()
        }
      })
    }
  }
})