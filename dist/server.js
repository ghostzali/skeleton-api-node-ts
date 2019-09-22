"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = require("./router");
const utils_1 = require("./utils");
const services_1 = __importDefault(require("./services"));
const middleware_1 = __importDefault(require("./middleware"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
const path_1 = require("path");
dotenv_1.default.config({
    path: path_1.resolve(__dirname, "../.env")
});
process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});
const router = router_1.ROUTER;
utils_1.applyMiddleware(middleware_1.default, router);
utils_1.applyRoutes(services_1.default, router);
utils_1.applyMiddleware(errorHandlers_1.default, router);
const { HOST = '127.0.0.1', PORT = 3000 } = process.env;
const server = http_1.default.createServer(router);
server.listen(PORT, () => {
    console.log(("      Application started. Running at http://%s:%d"), HOST, PORT);
});
//# sourceMappingURL=server.js.map