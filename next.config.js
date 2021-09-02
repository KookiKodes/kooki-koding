const redis = require("redis");

const { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD } = process.env;
const redis_client = redis.createClient(REDIS_PORT, REDIS_HOST);
redis_client.auth(REDIS_PASSWORD);

redis_client.on("connected", function(error) {
  if (error) return console.error(error);
  console.log("Redis Client Connected");
});

const redis_clientProxy = new Proxy(redis_client, {
  get(target, prop) {
    if (!target[prop]) {
      const { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD } = process.env;
      if (!target.connected) {
        target.auth(REDIS_PASSWORD);
        return target[prop];
      }
      const redis_client = redis.createClient(REDIS_PORT, REDIS_HOST);
      redis_client.on("connected", function(error) {
        if (error) return console.error(error);
        console.log("Redis Client Connected");
      });
      return redis_client[prop];
    }

    return target[prop];
  },
});

module.exports = {
  serverRuntimeConfig: {
    redis_client: redis_clientProxy,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
