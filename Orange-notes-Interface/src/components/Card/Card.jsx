import { useEffect, useState } from "react"

export function Card(props){
    const [column ,setColumn] =useState('Backlog')
    useEffect(()=>{
        if(props.status == "A Fazer"){
            setColumn('Backlog')
        }else if(props.status == "Fazendo"){
            setColumn('Doing')
        }else{
            setColumn('Done')
        }
    },[props.status])
    return (
        <div className={column}>
            <p className="itemTitle">{props.title}</p>
            <p className="itemDescr">{props.descr}</p>
            <p className="status">{props.status}</p>
            <Button label={props.label}/>
        </div>
        
    )
}