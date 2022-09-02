import { useContext, useState } from "react"
import { Header } from '../components/Header/Header'
import { Button } from "../components/Button/Button"
import { Forms } from "../components/Forms/Forms"
import {CardContainer} from '../components/CardContainer/CardContainer'
import './styles/Home.css'
import { Context } from "../context/Context"
import { useNavigate } from "react-router-dom"

export function Home(){
    const [form, setForm] = useState("hidden")
    const [title, setTitle] = useState("")
    const [descricao, setDescricao] = useState("")
    const {activeUser, setActiveUser} = useContext(Context)
    const navigate = useNavigate

    return(
        <>
            <Header label="Logout" path="/" home="/home" />
            <main className="homeMain">
                <h1 className="h1Home">Seja bem vindo / vinda / vinde {activeUser.nome}. </h1>
                <p className="pHome">Selecione um de seus temas <Button label="+" className="add" callback={()=>{
                    setForm("divForm")
                }}/></p>

                <div className={form}>
                    <Button className="add cancel" label="x" callback={()=>{
                        setForm("hidden")
                    }} />
                    <Forms className={""} 
                        input={["titulo", "descrição"]} 
                        type={["text", "text"]} 
                        callback={[setTitle, setDescricao]}
                        onClick={()=>{
                            setForm("hidden")
                            const infos = {
                                    titulo:title,
                                    descricao:descricao,
                                    tarefas:[            {
                                        titulo:"Titulo da Tarefa",
                                        descricao: "Descrição da Tarefa",
                                        status:"A Fazer"
                                    }]
                                }
                                    activeUser.temas.push(infos)
                                    }}
                        path="/home"
                    />
                </div>
                <CardContainer 
                    containerName="themeContainer" 
                    changeData={navigate} 
                    dados={activeUser.temas} 
                    buttonName="hidden"
                    isTask = {false}
                    form={setForm}
                />
            </main>
        </>
    )
}
