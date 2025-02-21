import { Router } from "express";
import { EmailController } from "../controllers/EmailController";
import { ApiExpress } from "../api/api.express";

export class EmailRoutes {

    constructor() { }

    public static routes = (api: ApiExpress, controller: EmailController) => {
        api.addPostRoute("/email", controller.sendEmail);
    }
}