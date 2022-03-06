import { Prisma } from "@prisma/client";
import { CreateUserRepository } from "../../repositories/CreateUserRepository";

export class RegisterUserService {
    private createUserRepository = new CreateUserRepository()

    async execute (data: Prisma.UserCreateInput) {
        // Passa o dados do usuário para a criação no banco
        const newUser = await this.createUserRepository.execute(data)

        //retorna o usuário
        return newUser
    }
}