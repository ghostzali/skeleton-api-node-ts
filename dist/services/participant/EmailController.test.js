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
describe("EmailController", () => {
    test("isExist status", () => __awaiter(void 0, void 0, void 0, function* () {
        expect((yield EmailController_1.isExist("abcd@test.com")).status).toBe("AVAILABLE");
    }));
    test("isExist message", () => __awaiter(void 0, void 0, void 0, function* () {
        expect((yield EmailController_1.isExist("abcd@test.com")).message).toBe("Hasn't been taken.");
    }));
});
//# sourceMappingURL=EmailController.test.js.map