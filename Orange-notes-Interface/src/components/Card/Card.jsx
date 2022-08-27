import { useEffect, useState } from "react"
import { InputList} from '../Input/InputList.jsx'
import { Button } from "../Button/Button.jsx"

export function Card(props){
    const [column ,setColumn] =useState('Backlog')
    const[classNameS , setClassNameS] = useState("hidden")
    useEffect(()=>{
        if(props.status == "A Fazer"){
            setColumn('Backlog')
            setClassNameS("")
        }else if(props.status == "Fazendo"){
            setColumn('Doing')
            setClassNameS("")
        }else if(props.status == "Feito"){
            setColumn('Done')
            setClassNameS("")
        }else{
            setColumn('')
        }
    },[props.status])

    return (
        <div className= {`card ${column}`} >
            <p className="itemTitle"><b>{props.title}</b></p>
            <p className="itemDescr">{props.descr}</p>
            <p className={classNameS}>{props.status}</p>
            <Button label={props.label} callback={()=>{
                props.callback()
                props.changeData(props.data.temas[props.i].tarefas)
            }}/>
        </div>
        
    )
}