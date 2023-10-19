const express = require('express')
const app = express()

const protectedPath = '/protected_docs'
const realms = {
  [protectedPath]: {
    users: ['root'],
  },
}

app.get(protectedPath, (req, res, next) => {
  const realm = realms[req.path]
  const authorization = req.get('authorization')

  if (!authorization) {
    // 告知用户需要身份认证
    res.statusCode = 401
    res.set('WWW-Authenticate', 'Basic realm=' + encodeURIComponent(realm))
    res.end()
    return
  }

  const usernamePasswd = authorization.split(' ')[1] // Basic Y2h5aW5ncDoxMjM0NTY
  const [usrname, passwd] = Buffer.from(usernamePasswd, 'base64')
    .toString()
    .split(':')

  if (!realm.users.includes(usrname)) {
    // 用户不在realm里
    res.statusCode = 401
    res.set('WWW-Authenticate', 'Basic realm=' + encodeURIComponent(realm))
    res.end()
    return
  }
  const isValid = usrname === 'root' && passwd === '123456'

  if (!isValid) {
    // 用户账号、密码验证不通过
    res.statusCode = 403
    res.end()
    return
  }

  res.end(`welecom ${usrname}`)
})

app.listen(3000)
