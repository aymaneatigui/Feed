import * as dotenv from 'dotenv';
import merge from "lodash.merge";
import developmentConfig from "./development";
import productionConfig from "./production";

const env = process.env.NODE_ENV || "development";
const stage = process.env.STAGE || "dev";
let envConfig;

if (env === "development") {
  if (stage === "dev") {
    dotenv.config({ path: '.env.dev.development' });
    envConfig = developmentConfig;
  } else if (stage === "prod") {
    dotenv.config({ path: '.env.dev.production' });
    envConfig = productionConfig;
  }
} else if (env === "docker") {
  dotenv.config({ path: '.env.docker' });
}

const defaultConfig = {
  env,
  stage,
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
};

export default merge(defaultConfig, envConfig);
