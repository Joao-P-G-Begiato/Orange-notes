import modeloUsuario from "../model/userModel.js";
import DatabaseUserMethod from "../DAO/DatabaseUserMethod.js";
import ValidateService from "../services/service.js";

DatabaseUserMethod.createTableUser();

class User{
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
    }
}