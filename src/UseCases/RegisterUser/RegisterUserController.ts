import { Request, Response } from "express";
import { RegisterUserService } from "./RegisterUserService";

export class RegisterUserController {
    private registerUserService = new RegisterUserService

    async handle (req: Request, res: Response) {
        const data = req.body
        try {
            this.registerUserService.execute(data)

            res.status(201).json({ message: 'Usuário registrado com sucesso!' })
        } catch (error) {
            res.status(error.status).json({ message: error.message })
        }
    }
}