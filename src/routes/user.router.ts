import {  Router } from "https://deno.land/x/oak/mod.ts";
const userRouter = new Router();
import {getUser, getUsers,createUser,updateUser, deleteUser} from "../controllers/user.controller.ts"
userRouter
.get('/users', getUsers)
.get('/users/:id', getUser)
.post('/users', createUser)
.put('/users/:id', updateUser)
.delete('/users/:id',deleteUser)
export default userRouter;