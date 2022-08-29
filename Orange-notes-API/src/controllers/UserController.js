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
    }
}