import {isExist} from "./EmailController";

describe("EmailController", () => {
    test("isExist status", async () => {
        expect((await isExist("abcd@test.com")).status).toBe("AVAILABLE");
    });

    test("isExist message", async () => {
        expect((await isExist("abcd@test.com")).message).toBe("Hasn't been taken.");
    });
});
