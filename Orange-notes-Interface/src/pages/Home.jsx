import { useEffect, useState } from "react"
import { Requisicao } from "../services/Requisicao"
import { Header } from '../components/Header/Header'
import { Button } from "../components/Button/Button"
import {CardContainer} from '../components/CardContainer/CardContainer'
import './styles/Home.css'

export function Home(){
    // const [userLogged, setUserLogged] = useState({})
    const [container, setContainer] = useState("themeContainer")
    const [data, setData] = useState(example.temas)
    const [formsInfo, setFormsInfo] = useState("")


// useEffect(()=>{
//     Requisicao("https://randomuser.me/api/")
//     .then(response =>{
//         setUserLogged(response.results)
//     })
// }, [])

    return(
        <>
        <Header label="Logout" path="/" home="/home" />
        <main className="homeMain">
            <h1 className="h1Home">Seja bem vindo / vinda / vinde {example.nome}. </h1>
            <p className="pHome">Selecione um de seus temas <Button label="+" className="add" callback={()=>{
                data.push(formsInfo)
                console.log(data)
            }}/></p>
            <CardContainer sClassName="hidden" containerName={container} changeContainer={()=>{
                setContainer()
            }} changeData={setData} data={example} dados={data} label="entrar"/>

        </main>
        </>
    )
}



const example = {
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