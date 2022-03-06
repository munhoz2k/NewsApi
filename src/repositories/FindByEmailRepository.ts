import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces/Users";

export class FindByEmailRepository {
    private db = new PrismaClient()

    async findByEmail(address: string): Promise<User> {
        // Procura o usuario pelo email
        const user = await this.db.user.findFirst({
            where: {
                address: address
            }
        })
        
        // Retorna o usuário
        return user
    }
}