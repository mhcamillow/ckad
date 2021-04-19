const router = require('express').Router();
const Redis = require('ioredis');

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

router.post(
  '/user',
  [],
  async (req, res) => {
    await redisClient.set('user.name', req.body['name']);
    res.json('OK')
  }
);

router.get(
  '/user', 
  async (req, res) => {
    const value = await redisClient.get('user.name');
    res.json({
      'user': value
    });
  }
);

module.exports = router