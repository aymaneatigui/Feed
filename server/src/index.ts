import app from "./server";
import * as dotenv from "dotenv";

dotenv.config();
import config from "./config";

const port = config.PORT;
const db_url = config.DATABASE_URL;
let db_type: string;

if (db_url) {
  if (db_url.includes("docker")) {
    db_type = "Container";
  } else if (db_url.includes("aymane")) {
    db_type = "Local";
  } else if (db_url.includes("mongodb+srv")) {
    db_type = "Cluster";
  } else {
    db_type = "Unknown";
  }
} else {
  db_type = "DB URL not defined";
}

app.listen(port, () => {
  console.log(`\n  Server :
  
  ➜  run on   :   http://localhost:${port}
  ➜  database :   ${db_type}
  `);
});
