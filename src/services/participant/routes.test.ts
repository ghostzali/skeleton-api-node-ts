import express, {Router} from "express";
import request from "supertest";
import middleware from "../../middleware";
import {applyMiddleware, applyRoutes} from "../../utils";
import errorHandlers from "../../middleware/errorHandlers";
import routes from "../../services/participant/routes";


describe("participantRoutes", () => {
    let router: Router;

    beforeEach(() => {
        router = express();
        applyMiddleware(middleware, router);
        applyRoutes(routes, router);
        applyMiddleware(errorHandlers, router);
    });

    test("a valid string query of email", async () => {
        const response = await request(router).get("/api/v1/participant/check?email=abcd@email.com");
        expect(response.status).toEqual(200);
    });

    test("a non-existing api method", async () => {
        const response = await request(router).get("/api/v1/participant/checker");
        expect(response.status).toEqual(404);
    });

    test("an empty query string of email", async () => {
        const response = await request(router).get("/api/v1/participant/check?email=");
        expect(response.status).toEqual(400);
    });
});
