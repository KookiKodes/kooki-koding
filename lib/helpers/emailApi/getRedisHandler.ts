import { createClient } from "redis";
import RedisClient from "redis/dist/lib/client";

export function getProxyHandler(redisDBUrl: string) {
  return {
    async get(target, prop) {
      if (prop === "redis_client" && !target[prop]?.get) {
        console.error("Adding Redis Client to Proxy");
        target[prop] = await instantiateRedis(redisDBUrl);
      }
      return await target[prop];
    },
  };
}

export async function instantiateRedis(url: string): Promise<RedisClient> {
  console.error("Redis Client Is Being Instantiated");
  const client = createClient({
    socket: {
      url,
    },
  });
  await client.connect();
  console.error("Redis Client Has Been Connected");
  return client;
}
