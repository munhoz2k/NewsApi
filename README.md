# NewsApi

> STATUS: Desenvolvimento ⚠️

  ###   Um sistema que envia e-mails de notícias do mercado financeiro.
  -   O NewsApi envia as notícias por email sempre que sai uma nova notícia,
  - para manter o usuário atualizado sobre oque acontece no mercado.

  -   O NewsApi é um sistema que roda em loop verificando por notícias em um site fixo usando webscrapping,
  - sempre que uma notícia nova é detectada no site, o NewsApi pega todos os usuários que registraram
  - para receber as notícias no e-mail, e os envia.

# Como Foi Feito
  - O NewsApi foi feito utilizando:
    * Prisma (ORM)
    * Puppeteer (WebScrapper)
    * NodeMailer (Envio de Emails)
    * Axios (HTTP Requests)
    * Arquiteturas e conceitos baseado no S.O.L.I.D
    * 
