import { app } from "./app";
import { router } from "./routes";
import { GetNewsService } from "./UseCases/VerifyForNews/GetNewsService";

app.use(router)

const port = 3333
app.listen(port, async () => {
    console.log(`Server UP on http://localhost:${port}`)

    const getNewsService = new GetNewsService
    await getNewsService.execute()
    
})