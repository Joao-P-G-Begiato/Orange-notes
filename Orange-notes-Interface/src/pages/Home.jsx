import { useContext, useEffect, useState } from "react"
import { requisicao } from "../services/Requisicao"
import { Header } from '../components/Header/Header'
import { Button } from "../components/Button/Button"
import { Forms } from "../components/Forms/Forms"
import {CardContainer} from '../components/CardContainer/CardContainer'
import './styles/Home.css'
import { Context } from "../context/context"

export function Home(){
    const [userLogged, setUserLogged] = useState("")
    const [container, setContainer] = useState("themeContainer")
    const [data, setData] = useState(example.temas)
    const [form, setForm] = useState("hidden")
    const [title, setTitle] = useState("")
    const [descricao, setDescricao] = useState("")
    const [loading, setLoading] = useState("homeMain")
    const [main, setMain] = useState("hidden")

    useEffect(()=>{
        setContainer("hidden")
    },[form])

useEffect(()=>{
    requisicao()
    .then(response =>{
        console.log(response)
        setUserLogged(response)
        setMain("homeMain")
        setLoading("hidden")
        setData(response.temas)
    })

}, [])

    return(
        <>
            <Header label="Logout" path="/" home="/home" />
            <div className={loading}>carregando....</div>
            <main className={main}>
                <h1 className="h1Home">Seja bem vindo / vinda / vinde {userLogged.nome}. </h1>
                <p className="pHome">Selecione um de seus temas <Button label="+" className="add" callback={()=>{
                    setForm("")
                }}/></p>

                <Forms className={form} 
                    input={["titulo", "descrição"]} 
                    type={["text", "texte"]} 
                    callback={[setTitle, setDescricao]}
                    onClick={()=>{
                        setForm("hidden")
                        if(data[0].status == undefined){
                            const infos = {
                                    titulo:title,
                                    descricao:descricao,
                                    tarefas:[            {
                                        titulo:"Titulo da Tarefa",
                                        descricao: "Descrição da Tarefa",
                                        status:"A Fazer"
                                    }]
                                }
                                userLogged.temas.push(infos)
                                setData(userLogged.temas[0].tarefas)
                                setTimeout(()=>{setData(userLogged.temas)
                                    }, 1)
                        }else{
                            const infos = {
                                    titulo:title,
                                    descricao:descricao,
                                    status:"A Fazer"
                                }
                                data.push(infos)
                                setData(data)
                    }}}
                    path="/home"
                    />

                <CardContainer sClassName="hidden" 
                    containerName={container} 
                    changeContainer={()=>{
                        setContainer()
                    }} 
                    changeData={setData} 
                    data={userLogged} 
                    dados={data} 
                    label="entrar"
                />
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