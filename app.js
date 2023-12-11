const express = require('express');
const expressGraphQL = require('express-graphql');
const port = 4800;
const app = express();
const schema = require('./schema/schema');

app.use('/graphql', expressGraphQL({
    schema,
    graphql:true
}))

app.listen(port, () => {
    console.log('listing to port s{port} ')
})