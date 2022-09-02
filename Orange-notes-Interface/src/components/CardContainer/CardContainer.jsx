import {Card} from '../Card/Card.jsx'
import { Link } from "react-router-dom"
import {Context} from '../../context/Context'
import { useContext } from 'react'

export function CardContainer(props){
    const {activeUser} = useContext(Context)

    return(
        <section className={props.containerName}>
            {props.dados.map((element, index)=>{
                return(
                    <Card 
                    i={index} 
                    changeData={props.changeData} 
                    key={index} 
                    params={props.params}
                    className="card" 
                    title={element.titulo} 
                    descr={element.descricao} 
                    status={element.status}
                    data={activeUser.temas}
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
            <button className={props.buttonName}><Link to="/home">Voltar </Link></button>
        </section>
    )
}