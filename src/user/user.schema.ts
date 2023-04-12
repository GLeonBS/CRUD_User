import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: String,
    age: Number
}, {
    timestamps: true 
    //campos de auditoria "createdAt"
})

export default model('User', userSchema)