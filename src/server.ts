import express, { Express, Request, Response, Router } from "express";
import { EmailController } from "./controllers/EmailController";
import dotenv from "dotenv";
import { EmailDTO } from "./DTO/EmailDTO";

dotenv.config();

const app: Express = express();
app.use(express.json());

app.post("/email", async (req: Request, res: Response) => {
    const data: EmailDTO = req.body;
    console.log(data);

    // if (!name || !email || !telefone || !mensagem) {
    //     res.status(400).json({ message: "Por favor, preencha todos os campos." });
    // }
    // await new EmailController(name, email, telefone, mensagem).sendEmail(req, res);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = { app };