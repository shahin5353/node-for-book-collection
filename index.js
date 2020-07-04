const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const uri = process.env.DB_PATH;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open',()=>{
    console.log('connected successful');
});

const app = express();
app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`Listening from port ${port}`);
    
});