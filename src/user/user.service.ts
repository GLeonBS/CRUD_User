//Para regra de negócio

import { UserTypes } from "./types/user.types"
import UserModel from "./user.schema"

export class UserService {
    async create(user: UserTypes) {
        const createdUser = await UserModel.create(user)

        return createdUser
    }
}