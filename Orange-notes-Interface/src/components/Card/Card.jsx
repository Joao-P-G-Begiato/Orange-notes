import { useEffect, useState } from "react"
import { Button } from "../Button/Button.jsx"

export function Card(props){
    const [column ,setColumn] =useState('Backlog')
    const[classNameS , setClassNameS] = useState("hidden")
    const[classNameB , setClassNameB] = useState("")

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
            <p className="itemTitle"><b>{props.title}</b></p>
            <p className="itemDescr">{props.descr}</p>
            <p className={classNameS}> <b>Status:</b> {props.status}</p>
            <Button className={classNameB} label={props.label} callback={()=>{
                props.callback("taskContainer")
                props.backButton()
                props.changeData(props.data.temas[props.i].tarefas)
            }}/>
        </div>
        
    )
}