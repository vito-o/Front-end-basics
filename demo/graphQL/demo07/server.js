let express = require('express')
let { graphqlHTTP } = require('express-graphql')
let graphql = require('graphql')

/* let schema = buildSchema(`
  type User {
    id: String
    name: String
  }

  type Query {
    user(id: String): User
  }
`) */

let fakeDatabase = {
  "a": {
    id: "a",
    name: "alice"
  },
  "b": {
    id: "b",
    name: "bob"
  }
}

/* let root = {
  user: ({id}) => {
    return fakeDatabase[id]
  }
}
 */
let userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
  }
})

let queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: (_, {id}) => {
        return fakeDatabase[id]
      }
    }
  }
})

let schema = new graphql.GraphQLSchema({query: queryType})

let app = express()
// app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  // rootValue: root,
  graphiql: true
}))
app.use(express.static('public'))
app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql');