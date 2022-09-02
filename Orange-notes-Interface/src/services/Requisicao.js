export async function requisicao(){
    const req = await fetch(`https://orange-notes-api.herokuapp.com/user/orangenotes`)
    const response = await req.json()
    return response 
}

export function tolkenGenerator(login, senha){
    let result =""
    const root = login+senha
    for(let i=0; i<root.length; i++){
        result += root.charCodeAt(i).toString(2)
    }
    return result
}

export async function atualizaRequisicao(reqBody){
    const myInit = {
        method: 'PUT',
        body: reqBody
    }

    const response = await fetch("https://orange-notes-api.herokuapp.com/user/1", myInit)
    const data = await response.json()
    return data
}

export const example = {
    nome: "João Paulo",
    email: "jpbegiato@hotmail.com",
    tolken: "01010110",
    temas: [{
        titulo:"HTML-5",
        descricao:"curso de hyper-text",
        tarefas:[
            {
                titulo:"curso da Alura",
                descricao: "curso HTML-5 intermediário",
                status:"Fazendo"
            },
            {
                titulo:"Documentação do Input",
                descricao: "documentação que fala dos tipos de input W3 School: https://www.w3schools.com/html/html_form_input_types.asp ",
                status:"Feito"
            }
        ]
    },
    {
        titulo:"CSS-3",
        descricao:"curso de estilização do hyper-text",
        tarefas:[
            {
                titulo:"curso da Alura",
                descricao: "curso de Bootstrap",
                status:"Fazendo"
            },
            {
                titulo:"Documentação de propriedades para Input",
                descricao: "documentação que mostra diferentes estilos de input W3: school",
                status:"Feito"
            }
        ]
    }
]
}