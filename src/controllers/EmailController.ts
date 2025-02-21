import { Router, Express, Request, Response, RequestHandler, NextFunction } from "express";
import { EmailService } from "../services/EmailService";
import { EmailDTO } from "../DTO/EmailDTO";

export class EmailController {

    private emailService: EmailService;
    constructor() {
        this.emailService = new EmailService();
    }

    public sendEmail = async (request: Request, response: Response) => {
        const { nome, email, telefone, mensagem } = request.body;
        const dataEmailDto = new EmailDTO(nome, email, telefone, mensagem);

        if (!dataEmailDto.getName() || !dataEmailDto.getEmail() || !dataEmailDto.getTelefone() || !dataEmailDto.getMensagem()) {
            return response.status(400).json({ message: "Por favor, preencha todos os campos." });
        }

        const result = await this.emailService.sendEmail(
            dataEmailDto.getName(),
            dataEmailDto.getEmail(),
            dataEmailDto.getTelefone(),
            dataEmailDto.getMensagem()
        );

        if (!result) {
            return response.status(400).json({ message: "Falha ao enviar e-mail, tente novamente mais tarde!!" });
        }
        return response.status(200).json({ message: "Email enviado com sucesso." });
    }
}