import { Router, Express, Request, Response } from "express";
import { EmailService } from "../services/EmailService";
import { EmailDTO } from "../DTO/EmailDTO";

export class EmailController {
    private name: string;
    private email: string;
    private telefone: string;
    private mensagem: string;

    constructor(data: EmailDTO) {
        this.name = data.getName();
        this.email = data.getEmail();
        this.telefone = data.getTelefone();
        this.mensagem = data.getMensagem();
    }

    public async sendEmail(req: Request, res: Response): Promise<Response> {
        const emailService = new EmailService();
        await emailService.sendEmail(this.name, this.email, this.telefone, this.mensagem);
        return res.status(200).json({ message: "E-mail enviado com sucesso!" })
    }
}