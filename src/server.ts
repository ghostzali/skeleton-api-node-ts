import http from "http";
import dotenv from "dotenv";
import {ROUTER} from "./router";
import {applyMiddleware, applyRoutes} from "./utils";
import routes from "./services";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import {resolve} from "path";

dotenv.config({
    path: resolve(__dirname, "../.env")
});
process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

const router = ROUTER;
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const {HOST = '127.0.0.1', PORT = 3000} = process.env;
const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(("      Application started. Running at http://%s:%d"), HOST, PORT)
});
