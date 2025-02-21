import { ApiExpress } from "./api/api.express";
import { EmailController } from "./controllers/EmailController";
import { EmailRoutes } from "./routes/EmailRoutes";

function server() {
    const api = ApiExpress.build();
    const emailController = new EmailController();

    EmailRoutes.routes(api, emailController);

    api.start(3000);
}

server();