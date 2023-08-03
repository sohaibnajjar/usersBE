import express, { Express } from "express";
import dotenv from "dotenv";
import http from "http";
import { routes } from "./routes";
import { errorHandler } from "./middleware/errorMiddleware";
import { connectDB } from "./config/database";

dotenv.config();

const app: Express = express();
const server = http.createServer(app);

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);
app.use(errorHandler);

const { API_PORT, PORT } = process.env;
const port = PORT || API_PORT;

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
