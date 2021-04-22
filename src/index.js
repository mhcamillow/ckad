'use strict';

const express = require('express');

const routes = require('./routes');

const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || '0.0.0.0';
const VAR = process.env.VAR || 'NOPE';
const VAR_SECRET = process.env.VAR_SECRET || 'NOPE';

const app = express();

app.use(express.json())

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send(`Hello World! ${VAR} - ${VAR_SECRET}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
