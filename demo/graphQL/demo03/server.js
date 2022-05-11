let express = require('express')
let { graphqlHTTP } = require('express-graphql')
let { buildSchema } = require('graphql')
var cors = require('cors')

let schema = buildSchema(`
  type Query {
    hello: String
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`)

let root = {
  hello: () => {
    return 'Hello world!'
  },
  rollDice(args) {
    var output = [];
    for (var i = 0; i < args.numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (args.numSides || 6)));
    }
    return output;
  }
}

let app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))
app.use(express.static('public'))
app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql');