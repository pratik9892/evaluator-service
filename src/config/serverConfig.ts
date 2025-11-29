import { configDotenv } from "dotenv";

configDotenv()

const serverConfig = {
    PORT : process.env.PORT
}

export {serverConfig}