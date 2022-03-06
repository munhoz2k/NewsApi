import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces/Users";

export class GetByTopicRepository {
    private db = new PrismaClient()

    async execute(topic: string): Promise<User[]> {
        // Pega todos os usuários com topico = x
        const users = await this.db.user.findMany({
            where: {
                topic: topic
            }
        })
        
        // Retorna todos usuários
        return users
    }
}