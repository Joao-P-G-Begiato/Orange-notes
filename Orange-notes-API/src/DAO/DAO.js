import Database from "../infra/database.js";

class DAO{
    static async activePragma(){
        const query = "PRAGMA fore_keys = ON";

        Database.run(query, (e)=>{
            if(e){
                console.log(e)
            }else{
                console.log("Nenhum erro encontrado ao criar a entidade")
            }
        })
    }

    static createTable(query){
        this.activePragma()

        return new Promise((resolve, rejecta) =>{
            Database.run(query, (e)=>{
                if(e){
                    console.log(e)
                }else{
                    console.log("Tabela criada com sucesso")
                }
            })
        })
    }

    static insert(entidade, query){
        const corpo = Object.values(entidade)

        return new Promise((resolve, reject)=>{
            Database.run(query, [...corpo], (e)=>{
                if(e){
                    reject(e.message)
                }else{
                    resolve({message:"Cadastro realizado com sucesso", error: false})
                }
            })
        })
    }

    static listAll(query){
        return new Promise((resolve, reject)=>{
            Database.all(query, (e,result)=>{
                if(e){
                    reject(e)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static listBy(param, query){
        return new Promise((resolve, reject) =>{
            Database.get(query, param, (e, result)=>{
                if(e){
                    reject(e)
                }else{
                    return resolve(result)
                }
            })
        })
    }

    static deleteById(id, query){
        return new Promise((resolve, reject) =>{
            Database.get(query, id, (e)=>{
                if(e){
                    reject(e)
                }else{
                    resolve({
                        result : `Registro com a identificação: ${id}, deletado com sucesso`,
                        error: "Nenhum erro encontrado durante a operação."
                    })
                }
            })
        })
    }
}