//Para regra de negócio

import { UserTypes } from "./types/user.types"
import UserModel from "./user.schema"

export class UserService {

    async create(user: UserTypes) {
        const createdUser = await UserModel.create(user)//.create faz parte do mongoDB

        return createdUser
    }

    async list() {
        const listedUser = await UserModel.find()

        return listedUser
    }

    async find(id) {
        const findedUser = await UserModel.findById(id)

        return findedUser
    }

    async update(id, dataToUpdate: UserTypes){
        const updatedUser = await UserModel.findOneAndUpdate({_id: id}, {
            firstName : dataToUpdate.firstName,
            lastName : dataToUpdate.lastName,
            email : dataToUpdate.email,
            age : dataToUpdate.age
        },{new : true})

        return updatedUser
    }

    async delete(id) {
        await UserModel.findOneAndDelete({_id: id})
        console.log('Usuário deletado');
        return
    }
}
