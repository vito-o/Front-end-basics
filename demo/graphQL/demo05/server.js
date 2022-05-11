let express = require('express')
let { graphqlHTTP } = require('express-graphql')
let { buildSchema } = require('graphql')
var cors = require('cors')

let schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    getDie(numSides: Int): RandomDie
  }
`)

class RandomDie {
  constructor(numSides) {
    this.numSides = numSides
  }

  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides)
  }

  roll({numRolls}) {
    let output = []
    for(let i = 0; i < numRolls; i++) {
      output.push(this.rollOnce())
    }
    return output;
  }
}

let root = {
  getDie: ({numSides}) => {
    return new RandomDie(numSides || 6)
  },
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