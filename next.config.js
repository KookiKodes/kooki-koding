const redis = require("redis");

// redis_client.auth(REDIS_PASSWORD);

// redis_client.on("connected", function(error) {
//   if (error) return console.error(error);
//   console.log("Redis Client Connected");
// });

// const redis_client = instantiateRedis();

const serverRuntimeConfigProxy = new Proxy(
  { redis_client: {} },
  getProxyHandler()
);

function instantiateRedis() {
  const { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD } = process.env;
  return redis.createClient({
    host: REDIS_HOST,
    port: parseInt(REDIS_PORT),
    auth_pass: REDIS_PASSWORD,
  });
}

function getProxyHandler() {
  return {
    get(target, prop) {
      if (prop === "redis_client" && !target[prop]?.get) {
        const redis_client = instantiateRedis();
        target[prop] = redis_client;
      }
      return target[prop];
    },
  };
}

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
