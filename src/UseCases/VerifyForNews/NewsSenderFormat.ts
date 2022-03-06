import { User } from '../../interfaces/Users'
import { GmailSender } from '../../providers/GmailSender'
import { PageContent } from '../../interfaces/PageContent'
import { htmlMailStructure } from './htmlMailStructure'
// import { MailTrapMailProvider } from '../../providers/implementations/MailTrapMailProvider'

export class NewsSenderFormat {
    // private mailProvider: IMailProvider = new MailTrapMailProvider()
    private mailProvider = new GmailSender()

    async execute (content: PageContent, users: Array<User>) {
        // Monta o html
        var html = htmlMailStructure(content)

        // Envia emails para todos usuários
        users.forEach( async user => {
            await this.mailProvider.sendMail({
                to: {
                    name: user.name,
                    address: user.address
                },
                from: {
                    name: "News Mailer",
                    address: "noreply@newsmailer.com"
                },
                subject: "Nóticias do NewsMailer",
                html: html
            });
            
            console.log(`E-mail sent to ${user.name}`)
        })

        return content.link
    }
}