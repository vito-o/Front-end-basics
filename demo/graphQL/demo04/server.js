let express = require('express')
let { graphqlHTTP } = require('express-graphql')
let { buildSchema } = require('graphql')
var cors = require('cors')

let schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`)

let root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random()
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6))
  },
  rollDice: (args) => {
    return [args.numDice, args.numSides]
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