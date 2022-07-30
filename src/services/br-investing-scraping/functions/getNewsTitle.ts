export default async function getNewsTitle (newsElement: Element): Promise<string> {
  const newsTitle = newsElement.querySelector("div.textDiv a")?.getAttribute("title")
  return newsTitle
}