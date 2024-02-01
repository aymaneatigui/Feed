import merge from "lodash.merge";
import prodConfig from "./prod";
import testingConfig from "./testing";
import localConfig from "./local";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const stage = process.env.STAGE || "local";
let envConfig;

// dynamically import each config depending on the stage we're in
if (stage === "production") {
  envConfig = prodConfig;
} else if (stage === "testing") {
  envConfig = testingConfig;
} else {
  envConfig = localConfig;
}

const defaultConfig = {
  stage,
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
};

export default merge(defaultConfig, envConfig);
