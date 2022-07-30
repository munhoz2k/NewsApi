import { app } from "./app";
import { router } from "./routes";
import { GetAllNewsService } from './services/br-investing-scraping/GetAllNewsService'


const port = 3333
app.listen(port, async () => {
    console.log(`Server UP on http://localhost:${port}`)

    const getNewsService = new GetAllNewsService()
    console.log(await getNewsService.execute())
    
})