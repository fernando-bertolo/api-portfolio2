import { Router, Express, Request, Response } from "express";
import { EmailService } from "../services/EmailService";

export class EmailController {
    private name: string;
    private email: string;
    private telefone: string;
    private mensagem: string;

    constructor(name: string, email: string, telefone: string, mensagem: string) {
        this.name = name;
        this.email = email;
        this.telefone = telefone;
        this.mensagem = mensagem;
    }

    public async sendEmail(req: Request, res: Response): Promise<Response> {
        const emailService = new EmailService();
        await emailService.sendEmail(this.name, this.email, this.telefone, this.mensagem);
        return res.status(200).json({ message: "E-mail enviado com sucesso!" })
    }
}