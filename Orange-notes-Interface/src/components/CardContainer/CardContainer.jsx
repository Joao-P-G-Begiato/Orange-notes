import {Card} from '../Card/Card.jsx'
import { Button } from '../Button/Button.jsx'

export function CardContainer(props){
    return(
        <section className={props.containerName}>
            {props.dados.map((element, index)=>{
                return(
                    <Card 
                    i={index} 
                    changeData={props.changeData} 
                    key={index} 
                    className="card" 
                    title={element.titulo} 
                    descr={element.descricao} 
                    status={element.status}
                    isTask={props.isTask}
                    delete={()=>{
                        if(props.dados.length <= 1){
                            alert("você precisa ter pelo menos 1 tema e todos os temas precisam conter pelo menos 1 tarefa")
                        }else{
                            props.dados.splice(props.dados.indexOf(element), 1)
                            props.form("")
                            setTimeout(()=>props.form("hidden"), 1)
                        }
                    }
                    }
                    />
                )
            })}
            {<Button className={props.buttonName} label="voltar" callback={() => {
                console.log("oi")
                }}/>}
        </section>
    )
}