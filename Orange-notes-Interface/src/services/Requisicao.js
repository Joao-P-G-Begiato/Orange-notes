export async function Requisicao(url){
    const req = await fetch(url)
    const response = await req.json()
    return response 
}