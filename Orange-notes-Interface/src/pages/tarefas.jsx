import { useContext, useState } from "react"
import { Header } from '../components/Header/Header'
import { Button } from "../components/Button/Button"
import { Forms } from "../components/Forms/Forms"
import {CardContainer} from '../components/CardContainer/CardContainer'
import './styles/Home.css'
import { Context } from "../context/Context"
import { useNavigate, useParams } from "react-router-dom"

export function Tarefa(){
    const [form, setForm] = useState("hidden")
    const [title, setTitle] = useState("")
    const [descricao, setDescricao] = useState("")
    const {activeUser, setActiveUser} = useContext(Context)
    const navigate = useNavigate
    const params = useParams()

    return(
        <>
            <Header label="Logout" path="/" home="/home" />
            <main className={"homeMain"}>
                <h1 className="h1Home"> Tarefas de {activeUser.nome}. </h1>
                <p className="pHome">Aqui estão suas tarefas para o tema {activeUser.temas[params.id].titulo}: <Button label="+" className="add" callback={()=>{
                    setForm("")
                }}/></p>

                <Forms className={form} 
                    input={["titulo", "descrição"]} 
                    type={["text", "texte"]} 
                    callback={[setTitle, setDescricao]}
                    onClick={()=>{
                        setForm("hidden")
                        const infos = {
                            titulo:title,
                            descricao:descricao,
                            status:"A Fazer"
                        }
                        activeUser.temas[params.id].tarefas.push(infos)
                    }}
                    path="/home"
                    />

                <CardContainer sClassName="hidden" 
                    containerName="taskContainer" 
                    changeData={navigate} 
                    dados={activeUser.temas[params.id].tarefas} 
                    buttonName=""
                    params={params.id}
                    isTask = {true}
                    form={setForm}
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