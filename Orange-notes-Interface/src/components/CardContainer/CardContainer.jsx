import {Card} from '../Card/Card.jsx'
import { Button } from '../Button/Button.jsx'
import { useEffect, useState } from 'react'

export function CardContainer(props){
    const [classNameBack, setClassNameBack] = useState("hidden")
    const [sec, setSec] = useState(props.containerName)
    const [tema, setTema] = useState(0)
    
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
                    tema={setTema}
                    delete={()=>{
                        if(props.dados.length <= 1){
                            alert("você precisa ter pelo menos 1 tema e todos os temas precisam conter pelo menos 1 tarefa")
                        }else{
                                props.dados.splice(props.dados.indexOf(element), 1)
                                if(element.status == undefined){
                                    setSec("themeContainer")
                                    props.changeData(props.data.temas[0].tarefas)
                                    setTimeout(()=>{props.changeData(props.data.temas)
                                    }, 1)
                                }else{
                                    
                                    props.changeData(props.data.temas)
                                    setTimeout(()=>{props.changeData(props.data.temas[tema].tarefas); setClassNameBack(""); setSec("taskContainer")} ,1)
                                }
                        }
                    }}
                    />
                    
                )
            })}
            {<Button className={classNameBack} label="voltar" callback={() => {
                props.changeData(props.data.temas);
                }}/>}
        </section>
    )
}