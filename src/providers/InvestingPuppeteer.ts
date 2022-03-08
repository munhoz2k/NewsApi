import puppeteer from 'puppeteer'
import { PageContent } from '../interfaces/PageContent'

export class InvestingPuppeteer {
    
    async scrapper(): Promise<PageContent | null> {
        const originalArticle = 'js-article-item articleItem   '

        //Inicia o navegador do Puppeteer na página de notícias
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto('https://br.investing.com/news/stock-market-news')
        
        // Acessa o link da última notícia        
        const { link, articleType } = await page.evaluate(() => {
            const articleType = document.querySelector('div.largeTitle article').className
            const link = document.querySelector('div.largeTitle div.textDiv a').getAttribute('href')
            return { link, articleType }
        })

        // Filtra por artigos de notícias originais do site: br.investing.com
        if (articleType !== originalArticle) {
            return null
        }

        const fullLink = `https://br.investing.com${link}`
        await page.goto(`${fullLink}`, { timeout: 0 })
        
        // Garimpa os dados da página de notícias
        const pageContent = await page.evaluate(() => {
            return {
                title: document.querySelector('h1.articleHeader').innerHTML,
                subtitle1: document.querySelector('div.WYSIWYG.articlePage p:nth-child(2)').textContent,
                subtitle2: document.querySelector('div.WYSIWYG.articlePage p:nth-child(3)').textContent,
                postTime: document.querySelector('div.contentSectionDetails span').textContent,
                link: '',
            }
        })
        pageContent.link = fullLink
        
        await browser.close()
        console.log('Scrapping done!')

        return pageContent
    }

}