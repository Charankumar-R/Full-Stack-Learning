// Redis caching example
// This file contains code for integrating Redis caching in the backend
// of the application to improve performance and reduce database load.

const redis = require('redis');
const { promisify } = require('util');
const Redis = require('ioredis');

// Create a Redis client
const redisClient = redis.createClient({
  host: 'localhost', // Redis host
  port: 6379,        // Redis port
});
const redisIORedis = new Redis();

// Promisify Redis client methods for easier async/await usage
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

// Cache middleware to check Redis cache before hitting the database
const cacheMiddleware = async (req, res, next) => {
  const key = req.originalUrl; // Use the request URL as the cache key
  const cachedResponse = await getAsync(key);

  if (cachedResponse) {
    // If cache exists, return the cached response
    return res.send(JSON.parse(cachedResponse));
  }

  // If no cache, proceed to the next middleware/controller
  next();
};

// Cache utility functions
const cacheUtils = {
  get: getAsync,
  set: setAsync,
};

// Example Redis caching using ioredis
async function cacheExample(key, value) {
  await redisIORedis.set(key, value);
  const cached = await redisIORedis.get(key);
  console.log('Cached value:', cached);
}

module.exports = {
  redisClient,
  cacheMiddleware,
  cacheUtils,
  cacheExample,
};