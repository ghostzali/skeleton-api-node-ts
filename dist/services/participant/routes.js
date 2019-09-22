"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmailController_1 = require("./EmailController");
const checks_1 = require("../../middleware/checks");
exports.default = [
    {
        path: "/",
        method: "get",
        handler: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.send("Hello world!");
        })
    },
    {
        path: "/api/v1/participant/check",
        method: "get",
        handler: [
            checks_1.checkEmailParams,
            ({ query }, res) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield EmailController_1.isExist(query.email);
                res.status(200).send(result);
            })
        ]
    }
];
//# sourceMappingURL=routes.js.map