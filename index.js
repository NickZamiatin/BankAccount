const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3007
const accountRoutes = require('./routes/accounts')

app.use(morgan('dev'));
app.use(express.json());

app.use('/', accountRoutes)

app.get('/', (require, response) => {
    response.send('Welcpme to the ZamiatinBank')
})

app.listen(PORT, () => {
    console.log(`library-express: Express application is listening on port ${PORT}..`)
})