import { useEffect, useState } from "react"
import { attRequisicao } from "../../services/Requisicao.js"
import { Button } from "../Button/Button.jsx"
import { Input } from "../Input/Input.jsx"
import {InputList} from '../Input/InputList'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../context/Context.jsx"

export function Card(props){
    const [form, setForm] = useState("hidden")
    const [title, setTitle] = useState(props.titulo)
    const [descr, setDescr] = useState(props.descr)
    const [status, setStatus] = useState(props.status)
    const [alert, setAlert] = useState("hidden")
    const {activeUser} = useContext(Context)

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
                            attRequisicao(activeUser)
                        }}
                    />
                </p>
            <p className="itemDescr">{props.descr}</p>
            <p className={props.status}>{props.status}</p>
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
                        if(title != undefined && (status == "A Fazer" ||status == "Fazendo" || status == "Feito" )){
                            console.log(props.data)
                            props.data[props.params].tarefas[props.i].titulo = title
                            props.data[props.params].tarefas[props.i].descricao = descr
                            props.data[props.params].tarefas[props.i].status = status
                            setForm("hidden")
                            attRequisicao(activeUser)
                            props.containerForm("")
                            setTimeout(()=>props.containerForm('hidden'),1)
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
                    attRequisicao(activeUser)
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
                            if(title != undefined){
                                props.data[props.i].titulo = title
                                props.data[props.i].descricao = descr
                                setForm("hidden")
                                attRequisicao(activeUser)
                                props.containerForm("")
                                setTimeout(()=>props.containerForm('hidden'),1)
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