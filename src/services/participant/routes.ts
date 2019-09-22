import {Request, Response} from "express";
import {isExist} from "./EmailController";
import { checkEmailParams } from "../../middleware/checks";

export default [
    {
        path: "/",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send("Hello world!");
        }
    },
    {
        path: "/api/v1/participant/check",
        method: "get",
        handler: [
            checkEmailParams,
            async ({ query }: Request, res: Response) => {
            const result = await isExist(query.email);
            res.status(200).send(result);
            }
        ]
    }
];
