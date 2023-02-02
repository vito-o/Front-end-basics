var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
    foo: String
  }
`);

var root = { 
    hello: () => 'Hello world!',
    foo: () => 'Hello world foo!',
};

graphql({
    schema, 
    source: '{ foo }', 
    rootValue: root
}).then((response) => {
  console.log(response);
});