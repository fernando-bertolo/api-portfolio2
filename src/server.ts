import express, { Express, Request, Response, Router } from "express";
import { EmailController } from "./controllers/EmailController";
import dotenv from "dotenv";
import { EmailDTO } from "./DTO/EmailDTO";

dotenv.config();

const app: Express = express();
app.use(express.json());

app.post("/email", async (req: Request, res: Response) => {
    const { nome, email, telefone, mensagem } = req.body;
    const dataEmailDto = new EmailDTO(nome, email, telefone, mensagem);

    if (!dataEmailDto.getName() || !dataEmailDto.getEmail() || !dataEmailDto.getTelefone() || !dataEmailDto.getMensagem()) {
        res.status(400).json({ message: "Por favor, preencha todos os campos." });
    }
    const result = await new EmailController(dataEmailDto).sendEmail(req, res);
    if (!result) {
        res.status(400).json({ message: "Falha ao enviar e-mail, tente novamente mais tarde!!" });
    }
    res.status(200).json({ message: "Email enviado com sucesso." });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = { app };