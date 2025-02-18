import express, { Router, Express, Request, Response } from "express";

export class EmailController {
    private app: Express;
    private route: Router;

    constructor(app: Express) {
        this.app = app;
        this.route = Router();
        this.setupRoutes();
        this.app.use("/api", this.route);
    }

    private setupRoutes() {
        this.route.post("/email", this.sendEmail);
    }

    public sendEmail(req: Request, res: Response) {
        try {
            const { name, email, telefone, mensagem } = req.body;

            if (!name || !email || !telefone || !mensagem) {
                return res.status(400).json({ message: "Por favor, preencha todos os campos." });
            }

            return res.status(200).json({ message: "E-mail enviado com sucesso!" })
        } catch (error) {
            return res.status(500).json({ message: "Erro ao enviar e-mail" })
        }
    }
}