import {Card} from '../Card/Card.jsx'
import { Button } from '../Button/Button.jsx'
import { useEffect, useState } from 'react'

export function CardContainer(props){
    const [classNameBack, setClassNameBack] = useState("hidden")
    const [sec, setSec] = useState(props.containerName)
    
    useEffect(()=>{
        if(props.data == props.data.temas){
            setSec("themeContainer")
        }
    },[props.data])
    return(
        <section className={sec}>
        {props.dados.map((element, index)=>{
            return(
                <Card 
                callback={setSec} 
                i={index} 
                changeData={props.changeData} 
                data={props.data} key={index} 
                sClassName={props.sClassName} 
                className="card" 
                title={element.titulo} 
                descr={element.descricao} 
                label={props.label}
                status={element.status}
                backButton={()=>setClassNameBack("")}
                backButton2={()=>setClassNameBack("hidden")}
                sec = {sec}
                origin = {element}
                />
                
            )
        })}
        {<Button className={classNameBack} label="voltar" callback={() => {
            props.changeData(props.data.temas);
            }}/>}
        </section>
    )
}