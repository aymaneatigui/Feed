import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes/routes"
import errorHandler from "./errors/errorHandler";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Get /" });
});


app.use("/api", routes);
app.use(errorHandler)

export default app;
