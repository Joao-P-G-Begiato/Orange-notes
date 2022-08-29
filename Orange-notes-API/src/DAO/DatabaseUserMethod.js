import DAO from "./DAO.js"

class DataaseUserMethod extends DAO{
    static async createTableUser(){
        const query = `
        CREATE TABLE IF NOT EXISTS User(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            login VARCHAR,
            tolken VARCHAR,
            temas VARCHAR
        )
        `
        const response = await this.createTable(query)
        return response
    }

    static async insertUser(user){
        const query = `INSERT INTO User (nome, login, tolken, temas) VALUES (?,?,?,?)`;
        const response = await this.insert(user, query)
        return response
    }
}