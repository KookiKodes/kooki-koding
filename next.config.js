const redis = require("redis");

const { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD } = process.env;
const redis_client = redis.createClient(REDIS_PORT, REDIS_HOST);
redis_client.auth(REDIS_PASSWORD);

redis_client.on("connected", function(error) {
  if (error) return console.error(error);
  console.log("Redis Client Connected");
});

const serverRuntimeConfig = {
  redis_client,
};

redis_client;

const serverRuntimeConfigProxy = new Proxy(serverRuntimeConfig, {
  get(target, prop) {
    if (prop === "redis_client") {
      if (!target[prop]?.get) {
        const redis_client = redis.createClient(REDIS_PORT, REDIS_HOST);
        redis_client.auth(REDIS_PASSWORD);

        redis_client.on("connected", function(error) {
          if (error) return console.error(error);
          console.log("Redis Client Connected");
        });

        target[prop] = redis_client;
        return redis_client;
      } else if (!target[prop]?.connected) {
        target[prop].auth(REDIS_PASSWORD);
      }
    }
    return target[prop];
  },
});

module.exports = {
  serverRuntimeConfig: serverRuntimeConfigProxy,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
