"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("../utils/httpErrors");
exports.checkEmailParams = (req, res, next) => {
    if (!req.query.email) {
        throw new httpErrors_1.HTTP400Error("Missing email parameter");
    }
    else {
        next();
    }
};
//# sourceMappingURL=checks.js.map