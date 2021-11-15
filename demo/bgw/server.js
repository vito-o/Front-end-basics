const express = require('express')

const app = express();
const port = 8888

app.use(express.static('public'))

app.get('/aa', (req, res) => {
  if(req.query.callback) {
    res.header("Content-Type", "application/javascript; charset=UTF-8");
    res.send(`${req.query.callback}('window.a = "hello script"');`);
  } else {
    res.send('Hello World!')
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})