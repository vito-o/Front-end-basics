const { ApolloServer, gql } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const express = require('express')
const http = require('http') 
const { User } = require('./models/')
const { Console } = require('console')

async function startApolloServer(typeDefs, resolvers) {
  const app = express()
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({req}) => ({
      foo: 'bar'
    })
  })

  await server.start()

  server.applyMiddleware({
    app,
    path: '/'
  })

  await new Promise(resolve => httpServer.listen({port: 4000}, resolve))
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

}

const typeDefs = gql`
  type User {
    _id: String!
    name: String!
    age: Int
  }

  type Query {
    users: [User!]
    user(id:String!): User
  }
`

const resolvers = {
  Query: {
    // async users() {
    //   const users = await User.find()
    //   return users
    // },
    async user(parent, { id }) {
      User.findById(id, function(err, product){
        console.log(product)
      })
      // return user;
    }
  },
  
}

startApolloServer(typeDefs, resolvers)
