import { configDotenv } from "dotenv";

configDotenv()

 const serverConfig = {
    PORT : process.env.PORT || 3000,
    REDIS_PORT : process.env.REDIS_PORT || '127.0.0.1',
    REDIS_HOST : process.env.REDIS_HOST || 6379
}

export default serverConfig
