import { IMessage } from "../interfaces/IMessage";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class GmailSender {
    private transport: Mail

    // Configura o envio de emails
    constructor () {
        this.transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
              user: process.env.EMAIL_ADDRESS,
              pass: process.env.EMAIL_PASSWORD
            }
        })
    }

    // Função que realiza o envio de email
    async sendMail(message: IMessage): Promise<void> {
        this.transport.sendMail({
            to: message.to,
            from: message.from,
            subject: message.subject,
            html: message.html
        })
    }
}