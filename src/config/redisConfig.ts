const Redis = require("ioredis")
import serverConfig from "./serverConfig.js";

const redisConfig = {
    port : serverConfig.REDIS_PORT,
    host : serverConfig.REDIS_HOST
}

const redisConnection = new Redis.default(redisConfig);

export default redisConnection