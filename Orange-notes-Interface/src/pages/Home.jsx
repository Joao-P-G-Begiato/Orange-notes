import { useEffect, useState } from "react"
import { Requisicao } from "../services/Requisicao"
import { Header } from '../components/Header/Header'
import {CardContainer} from '../components/CardContainer/CardContainer'
import './styles/Home.css'

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
        <>
        <Header label="Logout" path="/" home="/home" />
        <main className="homeMain">
            <h1 className="h1Home">Sejam bem vindo Fulano de Tal.</h1>
            <p className="pHome">Selecione um de seus temas:</p>
            <CardContainer dados={["Metodologia Ágil", "HTML-5" , "CSS3","Inteligência Emocional"]}/>
        </main>
        </>
    )
}