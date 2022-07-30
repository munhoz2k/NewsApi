import { Prisma } from "@prisma/client";
import { CreateUserRepository } from "../../repositories/CreateUserRepository";

export class RegisterUserService {
    private createUserRepository = new CreateUserRepository()

    async execute (data: Prisma.UserCreateInput) {
        const newUser = await this.createUserRepository.execute(data)

        return newUser
    }
}