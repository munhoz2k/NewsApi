import { IMessage } from "../interfaces/IMessage";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider {
    private transport: Mail

    // Configura o envio de emails
    constructor () {
        this.transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "c1e0f8a2586f4b",
              pass: "74ce0b48a207d3"
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