import { Router } from "express";
import  userController from "./user/user.controller";

const routes = Router()

routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)


export default routes
