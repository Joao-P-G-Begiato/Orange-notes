import { useEffect, useState } from "react"
import { atualizaRequisicao } from "../../services/Requisicao.js"
import { Button } from "../Button/Button.jsx"
import { Input } from "../Input/Input.jsx"
import {InputList} from '../Input/InputList'
import { Link } from "react-router-dom"

export function Card(props){
    const [form, setForm] = useState("hidden")
    const [title, setTitle] = useState(props.titulo)
    const [descr, setDescr] = useState(props.descr)
    const [status, setStatus] = useState(props.status)
    const [alert, setAlert] = useState("hidden")

    if(props.isTask){
        return (
            <div className= {`card ${props.status}`}  >
                <p className="itemTitle">
                    <b>{props.title}</b> 
                    <Button 
                        className="add" 
                        label="-" 
                        callback={()=>{
                            props.delete()
                        // atualizaRequisicao(props.data)
                        }}
                    />
                </p>
            <p className="itemDescr">{props.descr}</p>
            <div>
                <Button className="update" label="atualizar" callback={()=>{
                    setForm("cardForm")
                }} />
            </div>
            <form className={form}>
                Título: 
                <Input type="text" name="title" callback={setTitle}></Input>
                Descrição: 
                <Input type="text" name="descricao" callback={setDescr}></Input>
                <span className={""}>
                    Status:
                    <InputList options={["A Fazer", "Fazendo", "Feito" ]} list="status" onChange={(e)=> setStatus(e.target.value)}/>
                </span>
                <span className={alert}>Algo de errado com as informações passadas, por favor revisar e tentar atualizar novamente</span>
                <div>
                    <Button className="update" label="salvar" callback={()=>{
                        props.data.tarefas[props.i].titulo = title
                        props.data.tarefas[props.i].descricao = descr
                        props.data.tarefas[props.i].status = status
                        if(title != undefined && (status == "A Fazer" ||status == "Fazendo" || status == "Feito" )){
                            setForm("hidden")
                            }else{
                                setAlert("")
                            }
                        }
                    } />
                    <Button className="update" label="cancelar" callback={()=>{
                        
                        setForm("hidden")
                    }
                    } />
                </div>
            </form>
            </div>
        )
    }else{
        return (
            <div className= {`card`} >
                <p className="itemTitle"><b>{props.title}</b> <Button className="add" label="-" callback={()=>{
                    props.delete()
                    // atualizaRequisicao(props.data)
                }} /></p>
                <p className="itemDescr">{props.descr}</p>
                <div className="cardButtons">
                    <Link to={`/tarefas/${props.i}`}><button>Entrar</button></Link>
                    <Button className="update" label="atualizar" callback={()=>{
                        setForm("cardForm")
                    }} />
                </div>
                <form className={form}>
                    Título: 
                    <Input type="text" name="title" callback={setTitle}></Input>
                    Descrição: 
                    <Input type="text" name="descricao" callback={setDescr}></Input>
                    <span className={alert}>Algo de errado com as informações passadas, por favor revisar e tentar atualizar novamente</span>
                    <div>
                        <Button className="update" label="salvar" callback={()=>{
                            props.data.temas[props.i].titulo = title
                            props.data.temas[props.i].descricao = descr
                            if(title != undefined){
                                setForm("hidden")
                            }else{
                                setAlert("")
                        }}} />
                        <Button className="update" label="cancelar" callback={()=>{
                            setForm("hidden")
                        }
                        } />
                    </div>
                </form>
            </div>
        )
    }
}