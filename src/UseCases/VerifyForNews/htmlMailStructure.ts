import { PageContent } from "../../interfaces/PageContent";

export function htmlMailStructure (content: PageContent) {
    var html = `<h1 style="font-family: Arial; padding: 1rem; text-align: justify;">${content.title}</h1>
    <p style="font-family: Arial; font-size: 14pt; padding: 1rem; text-align: justify;">${content.subtitle1}</p>
    <p style="font-family: Arial; font-size: 14pt; padding: 1rem; text-align: justify;">${content.subtitle2}</p>
    <p style="padding: 1rem"> Leia o artigo completo em: <a href=${content.link}>${content.link}</a></p>
    `

    return html
}