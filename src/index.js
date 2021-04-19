'use strict';

const express = require('express');
const Redis = require('ioredis');

const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

app.use(express.json())

app
  .get('/', (req, res) => {
    res.send('Hello World');
  })
  .post('/user', async (req, res) => {
    await redisClient.set('user.name', req.body['name']);
    res.json('OK')
  })
  .get('/user', async (req, res) => {
    const value = await redisClient.get('user.name');
    res.json({
      'user': value
    });
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
