import {save,findAll,findById,update,remove} from "../respository/user.repository.ts"
const getUsers = async (context:any)=>{
    context.response.headers.set("Content-Type","application/json")
    try {
        const users = await findAll()
        context.response.status = 200;
        context.response.body = JSON.stringify(users)
        
    } catch (error) {
        console.log(error)
        context.response.status = 500;
        context.response.body = JSON.stringify({
            error:{
                message: error.message,
                status: 500
            }
        })
    }

}
const getUser = async (context:any)=>{
    const id = context.params.id
    const user = await findById(id)
    context.response.headers.set("Content-Type","application/json")

    if(!user){
        
        context.response.status = 404;
        context.response.body = JSON.stringify({
            error:{
                message: 'User not found',
                status: 404
            }
        })
        
    }
    else{
        context.response.status = 200;
        context.response.body = JSON.stringify(user)
    }
    
}
const createUser = async (context:any)=>{
    const body = await context.request.body()
    const user = await body.value
    if((user && user.name && user.country)) {
        
        context.response.headers.set("Content-Type","application/json")
        await save(user)
        context.response.status = 201;
        context.response.body = JSON.stringify({message: "User created successfully"})
    }
}
const updateUser = async (context:any)=>{
    const body = await context.request.body()
    const user = await body.value
    const id = context.params.id
    context.response.headers.set("Content-Type","application/json")
    if(user) {      
        await update(id,user)
        context.response.status = 200;
        context.response.body = JSON.stringify({message: "User updated successfully"})      
    }

}
const deleteUser = async (context:any)=>{
    const id = context.params.id

    try {
        await remove(id)
        context.response.headers.set("Content-Type","application/json")
        context.response.status = 200;
        context.response.body = JSON.stringify({message:"User deleted successfully"})
    } catch (error) {
        console.log(error)
        context.response.status = 404;
        context.response.body = JSON.stringify({
            error:{
                message: error.message,
                status: 404
            }
        })
    }
}

export {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}