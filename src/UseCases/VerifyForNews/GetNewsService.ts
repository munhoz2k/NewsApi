import { InvestingPuppeteer } from "../../providers/InvestingPuppeteer";
import { NewsSenderFormat } from "./NewsSenderFormat";
import delay from "../../utils/delay";
import { GetByTopicRepository } from "../../repositories/GetByTopicRepository";

export class GetNewsService {
    
    private getByTopicRepository = new GetByTopicRepository()
    private mailSender = new NewsSenderFormat()
    private newsProvider = new InvestingPuppeteer()
    
    async execute () {
        var linkSentToUser: string
        
        // Loop infinito
        while (true) {

            // Faz um scrapping das notícias
            const news = await this.newsProvider.scrapper()
            const users = await this.getByTopicRepository.execute('business')
            
            // Verifica se há notícias (Caso o artigo da notícia não seja original do site: br.investing.com, o valor será null)
            if (news !== null) {
                // Verifica se a notícia é nova e se há usuarios no banco
                if (news.link !== linkSentToUser && users.length > 0) {
                    
                    // Envia a notícia para os usuários
                    const linkSent = await this.mailSender.execute(news, users)
                    
                    // Define a última notícia na variavel para comparação
                    linkSentToUser = linkSent
                    console.log(news)
                }
            }

            // Timer de 2 minutos
            await delay(120)
        }
        

        // setInterval(async () => {
        //     const news = await this.newsProvider.scrapper()
            
        //     if (news.link !== linkSentToUser) {
        //         await this.mailSender.execute(news)
                
        //         linkSentToUser = news.link
        //         console.log(news)
        //     }
        // }, 15000);
    }
}