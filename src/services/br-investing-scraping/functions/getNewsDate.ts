import * as cheerio from 'cheerio'

export default async function getNewsDate (newsElement): Promise<Date> {
  const $ = cheerio.load(newsElement)

  const newsDate = $("span").html()

  console.log(newsDate)

  return new Date
}