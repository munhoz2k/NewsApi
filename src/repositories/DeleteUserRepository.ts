import { PrismaClient, Prisma } from "@prisma/client";
import { AppError } from "../error/AppError";

export class DeleteUserRepository {
    private db = new PrismaClient

    async execute(address: string): Promise<void> {
        // Procura o email no banco de dados
        const user = await this.db.user.findFirst({
            where: {
                address: address
            }
        })

        // Verifica se o email existe
        if (!user) {
            throw new AppError('Usuário não encontrado', 404)
        }

        // Apaga o usuário do banco
        await this.db.user.delete({
            where: {
                id: user.id
            }
        })
        
        // Retorna null
        return
    }
}