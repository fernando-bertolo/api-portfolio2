import { Response } from 'express';
import nodemailer, { Transporter } from 'nodemailer';

export class EmailService {
    async sendEmail(name: string, email: string, telefone: string, mensagem: string) {
        const smtp: Transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        return await smtp.sendMail({
            from: process.env.MAIL_USER,
            to: "bertolo.dev@gmail.com",
            subject: "Contato do portfolio",
            html: `
                Nome: ${name} <br>
                Email: ${email} <br>
                Telefone: ${telefone} <br>
                Mensagem: ${mensagem}
            `,
        });
    }
}
