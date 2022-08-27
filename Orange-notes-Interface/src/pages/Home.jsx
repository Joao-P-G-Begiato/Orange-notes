import { useEffect, useState } from "react"
import { Requisicao } from "../services/Requisicao"

export function Home(){
    const [userLogged, setUserLogged] = useState([])

useEffect(()=>{
    Requisicao("https://randomuser.me/api/")
    .then(response =>{
        setUserLogged(response.results)
    })
}, [])

console.log(userLogged)
    return(
        <h1>Hello</h1>
    )
}