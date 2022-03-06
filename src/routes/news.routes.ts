import { Request, Response, Router } from "express"
import { RegisterUserController } from "../UseCases/RegisterUser/RegisterUserController"

const registerUserController = new RegisterUserController()
const router = Router()

router.get('/', (req: Request, res: Response) => {
    return 
})

router.post('/register', (req: Request, res: Response) => {
    return registerUserController.handle(req, res)
})

export { router }