import app from "./server";
import * as dotenv from "dotenv";

dotenv.configDotenv();
import config from "./config";

const port = config.PORT;

app.listen(port, () => {
  console.log(`server run on : http://localhost:${port}`);
});
