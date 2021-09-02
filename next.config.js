const redis = require("redis");
const { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD } = process.env;

const redis_client = redis.createClient(REDIS_PORT, REDIS_HOST);
redis_client.auth(REDIS_PASSWORD);

redis_client.on("connect", function(error) {
  if (error) return console.log(error);
  console.log("Redis Database Connected");
});

module.exports = {
  serverRuntimeConfig: {
    redis_client,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
