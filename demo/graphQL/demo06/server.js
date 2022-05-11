let express = require('express')
let { graphqlHTTP } = require('express-graphql')
let { buildSchema } = require('graphql')

let schema = buildSchema(`
  type Query {
    ip: String
  }
`)

const loggingMiddleware = (req, res, next) => {
  console.log('ip:', req.ip)
  next()
}

let root = {
  ip: function (args, request) {
    return request.ip
  }
}

let app = express()
app.use(loggingMiddleware)
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))
app.use(express.static('public'))
app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql');