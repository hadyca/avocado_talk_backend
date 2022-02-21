const LRU = require("lru-cache");

const options = {
  max: 100,
  ttl: 1000 * 60 * 60,
};

export const cache = new LRU(options);
