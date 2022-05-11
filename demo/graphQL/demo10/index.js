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

const libraries = [
  {
    branch: 'downtown'
  },
  {
    branch: 'riverside'
  },
];

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    branch: 'riverside'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    branch: 'downtown'
  },
];


const typeDefs = gql`
  type Library {
    branch: String!
    books: [Book!]
  }

  type Book {
    title: String!
    author: Author!
  }

  type Author {
    name: String!
  }

  type Query {
    libraries: [Library]
  }
`

const resolvers = {
  Query: {
    libraries() {
      return libraries
    }
  },
  Library: {
    books(parent, args, context) {
      console.log(context, 'context')
      return books.filter(book => book.branch == parent.branch)
    }
  },
  Book: {
    author(parent) {
      return {
        name: parent.author
      }
    }
  }
}


startApolloServer(typeDefs, resolvers)