import DAO from "./DAO.js"

export default class DatabaseUserMethod extends DAO{
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

    static async listAllUser(){
        const query = `SELECT * FROM User`
        const response = await this.listAll(query)
        return response
    }

    static async listUserByLogin(login){
        const query = `SELECT * FROM User WHERE Login = ?`
        const response = await this.listBy(login, query)
        return response
    }

    static async deleteUserById(id){
        const query = `DELETE FROM User WHERE id=?`
        const response = await this.deleteById(id, query)
        return response
    }

    static async updateUserById(id, user){
        const query = `UPDATE User
            SET
            nome = ?,
            login = ?,
            tolken = ?,
            temas = ?
            WHERE id = ?`
            const response = await this.updateById(user, id, query)
            return response
    }
}