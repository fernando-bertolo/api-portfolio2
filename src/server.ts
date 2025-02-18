import express, { Express, Router } from "express";
import { EmailController } from "./controllers/emailController";

const app: Express = express();
const route: Router = express.Router();
app.use(express.json());
app.use(route);

new EmailController(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = { app, route };