import axios from 'axios'
import { INewsModel } from '../../interfaces/INewsModel'
import * as cheerio from 'cheerio'

export class GetAllNewsService {
  allNews: INewsModel[] = []

  async execute(): Promise<INewsModel[]> {
    const webRequest = await axios.get('https://br.investing.com/news/stock-market-news')

    const $ = cheerio.load(webRequest.data)

    $('div.largeTitle').find('article.js-article-item').each(async (i, e) => {
      const news: INewsModel = {
        title: $(e).find('div a').text(),
        body: $(e).find('div p').text(),
        newsDate: $(e).find('span.date').text()
      }

      this.allNews.push(news)
    })

    return this.allNews
  }
}