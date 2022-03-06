import { PrismaClient, Prisma } from "@prisma/client"
import { randomUUID } from "crypto"
import { AppError } from "../error/AppError"

export class CreateUserRepository {
    private db = new PrismaClient()

    async execute(data: Prisma.UserCreateInput): Promise<void> {
        // Procura o email no banco de dados
        const user = await this.db.user.findFirst({ where: { address: data.address } }) 

        // Verifica se o email já está cadastrado
        if (user) {
            throw new AppError('Usuário já está registrado', 400)
        }

        // Cria o usuário no banco
        await this.db.user.create({
            data: {
                id: randomUUID(),
                name: data.name,
                address: data.address
            }
        })

        // Retorna null
        return
    }
}