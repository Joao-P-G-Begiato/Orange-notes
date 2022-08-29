export default class UserModel{
    constructor(nome, login, tolken){
        nome = this.nome
        login =  this.login
        tolken = this.tolken
        temas =  [{
            titulo : "Exemplo de Tema",
            descricao : "Clique em atualizar para alterar esse tema",
            tarefas : [
                {
                        titulo : "Exemplo de Tarefa",
                        descricao : "Clique em atualizar para alterar esse tema",
                        status : "A Fazer"
                    }
                ]
            }
        ]
    }
}