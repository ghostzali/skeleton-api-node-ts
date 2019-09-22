import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkEmailParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.query.email) {
        throw new HTTP400Error("Missing email parameter");
    } else {
        next();
    }
};
