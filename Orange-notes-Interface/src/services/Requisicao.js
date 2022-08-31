export async function Requisicao(login){
    const req = await fetch(`https://orange-notes-api.herokuapp.com/user/${login}`)
    const response = await req.json()
    return response 
}

export function tolkenGenerator(login, senha){
    let result =""
    const root = login+senha
    console.log(login+senha)
    for(let i=0; i<root.length; i++){
        result += root.charCodeAt(i).toString(2)
    }
    return result
}

const teste = tolkenGenerator("teste", "teste")
console.log(teste)