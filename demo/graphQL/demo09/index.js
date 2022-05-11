const { ApolloServer, gql } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const express = require('express')
const http = require('http') 

async function startApolloServer(typeDefs, resolvers) {
  const app = express()
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  await server.start()

  server.applyMiddleware({
    app,
    path: '/'
  })

  await new Promise(resolve => httpServer.listen({port: 4000}, resolve))
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

}

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster'
  },
]

const users = [
  {
    id: '1',
    name: 'Elizabeth Bennet'
  },
  {
    id: '2',
    name: 'Fitzwilliam Darcy'
  }
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type User {
    id: ID!
    name: String
  }

  type Query {
    books: [Book]
    numberSix: Int!
    numberSeven: Int!
    user(id: ID!): User
  }
`

const resolvers = {
  Query: {
    books: () => books,
    numberSix() {
      return 6;
    },
    numberSeven() {
      return 7;
    },
    user(parent, args, context, info) {
      return users.find(user => user.id == args.id)
    }
  }
}


startApolloServer(typeDefs, resolvers)