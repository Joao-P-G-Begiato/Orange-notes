import { useEffect, useState } from "react"
import { atualizaRequisicao } from "../../services/Requisicao.js"
import { Button } from "../Button/Button.jsx"
import { Input } from "../Input/Input.jsx"
import {InputList} from '../Input/InputList'

export function Card(props){
    const [column ,setColumn] =useState('Backlog')
    const[classNameS , setClassNameS] = useState("hidden")
    const[classNameB , setClassNameB] = useState("")
    const [form, setForm] = useState("hidden")
    const [title, setTitle] = useState(props.titulo)
    const [descr, setDescr] = useState(props.descr)
    const [status, setStatus] = useState(props.status)
    const [alert, setAlert] = useState("hidden")

    useEffect(()=>{
        if(props.status == "A Fazer"){
            setColumn('Backlog')
            setClassNameS("Backlog")
            setClassNameB("hidden")
        }else if(props.status == "Fazendo"){
            setColumn('Doing')
            setClassNameS("Doing")
            setClassNameB("hidden")
        }else if(props.status == "Feito"){
            setColumn('Done')
            setClassNameS("Done")
            setClassNameB("hidden")
        }else{
            setColumn('')
            setClassNameS("hidden")
            setClassNameB("")
            props.callback("themeContainer")
            props.backButton2()
        }
    },[props.status])


    return (
        <div className= {`card ${column}`} >
            <p className="itemTitle"><b>{props.title}</b> <Button className="add" label="-" callback={()=>{
                props.delete()
                atualizaRequisicao(props.data)
            }} /></p>
            <p className="itemDescr">{props.descr}</p>
            <p className={classNameS}> <b>Status:</b> {props.status}</p>
            <div>
                <Button className={classNameB} label={props.label} callback={()=>{
                    props.callback("taskContainer")
                    props.backButton()
                    props.tema(props.i)
                    props.changeData(props.data.temas[props.i].tarefas)
                }}/>
                <Button className="update" label="atualizar" callback={()=>{
                    setForm("cardForm")
                }} />
            </div>
            <form className={form}>
                Título: 
                <Input type="text" name="title" callback={setTitle}></Input>
                Descrição: 
                <Input type="text" name="descricao" callback={setDescr}></Input>
                <span className={classNameS}>
                    Status:
                    <InputList options={["A Fazer", "Fazendo", "Feito" ]} list="status" onChange={(e)=> setStatus(e.target.value)}/>
                </span>
                <span className={alert}>Algo de errado com as informações passadas, por favor revisar e tentar atualizar novamente</span>
                <div>
                    <Button className="update" label="salvar" callback={()=>{
                        if(props.origin.status == undefined){
                            props.data.temas[props.i].titulo = title
                            props.data.temas[props.i].descricao = descr
                            if(title != undefined){
                                setForm("hidden")
                                props.changeData(props.data.temas[0].tarefas)
                                setTimeout(()=>{props.changeData(props.data.temas)
                                }, 1)
                            }else{
                                setAlert("")
                            }
                        }else{
                            props.origin.titulo = title
                            props.origin.descricao = descr
                            props.origin.status = status
                            if(title != undefined && (status == "A Fazer" ||status == "Fazendo" || status == "Feito" )){
                                setForm("hidden")
                                props.changeData(props.data.temas[0].tarefas)
                                setTimeout(()=>{props.changeData(props.data.temas)
                                }, 1)
                                setAlert("hidden")
                            }else{
                                setAlert("")
                            }
                        }
                    }} />
                    <Button className="update" label="cancelar" callback={()=>{
                        
                        setForm("hidden")
                    }
                    } />
                </div>
            </form>
        </div>
        
        
    )
}