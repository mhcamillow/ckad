'use strict';

const express = require('express');

const routes = require('./routes');

const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.use(express.json())

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
