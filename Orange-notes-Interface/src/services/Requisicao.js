export async function requisicao(){
    const req = await fetch(`https://orange-notes-api.herokuapp.com/user/orangenotes`)
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
    console.log(result)
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
