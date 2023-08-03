"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const routes_1 = require("./routes");
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const database_1 = require("./config/database");
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
(0, database_1.connectDB)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/", routes_1.routes);
app.use(errorMiddleware_1.errorHandler);
const { API_PORT, PORT } = process.env;
const port = PORT || API_PORT;
server.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
