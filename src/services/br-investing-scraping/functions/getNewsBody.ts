import axios from "axios"
import * as cheerio from 'cheerio'

export default async function getNewsBody (newsElement: Element): Promise<string> {
  const newsHref = newsElement.querySelector("div.textDiv a").getAttribute("href")
  const webRequest = await axios.get('https://br.investing.com' + newsHref)  

  const $ = cheerio.load(webRequest.data)

  const pArray = []
  $('div.WYSIWYG').find('p').each((i, e) => {
    pArray.push($(e).text())
  })
  
  if (pArray[0].length < 60) {
    return pArray[0] + pArray[1]
  } else if (pArray[0].length > 250) {
    return pArray[0].split('.')[0]
  } else {
    return pArray[0]
  }
}