import UserModel from "../model/userModel.js";
import DatabaseUserMethod from "../DAO/DatabaseUserMethod.js";
import ValidateService from "../services/service.js";

DatabaseUserMethod.createTableUser();

export default class User{
    static route(app){
        app.get("/user", async(req, res)=>{
            const response = await DatabaseUserMethod.listAllUser();
            res.status(200).json(response)
        })

        app.get("/user:login", async(req, res)=>{
            try{
                const user = await DatabaseUserMethod.listUserByLogin(req.params.login)
                if(!user){
                    throw new Error("Usuário não cadastrado.")
                }
                res.status(200).json(user)
            }catch(error){
                res.status(404).json(error.message)
            }
        })
        
        app.post("/user", async(req, res)=>{
            const user = new UserModel(...Object.values(req.body))
            const isValid = ValidateService.validateTheme(user.temas) 
            try{
                if(isValid){
                    const userRegistered = await DatabaseUserMethod.listUserByLogin(user.login)
                    if(userRegistered){
                        throw new Error("Usuário já cadastrado.")
                    }
                    const response = await DatabaseUserMethod.insertUser(user)
                    res.status(201).json(response)
                }else{
                    throw new Error("Requisição incorreta revise o corpo da mesma.")
                }
            }catch(e){
                res.status(400).json(e.message)
            }
        })

        app.put("/user/:id",async (req, res)=>{
            const user = new UserModel(...Object.values(req.body))
            const isValid = ValidateService.validateTheme(user.temas)
            try{
                const userRegistered = await DatabaseUserMethod.listUserById(req.params.id)
                if(!userRegistered){
                    throw new Error(`Usuário não cadastrado, confira o id passado ou então tente utilizar o método post.`)
                }
                if(isValid){
                    const response = await DatabaseUserMethod.updateUserById(req.params.id, user)
                    res.status(200).json(response)
                }
            }catch(e){
                res.status(400).json(e.message)
            }
        })
    }
}