import {Card} from '../Card/Card.jsx'

export function CardContainer(props){

    return(
        <section className={props.className}>
        {props.dados.map((element, index)=>{
            return(
                <Card 
                callback={props.changeContainer} 
                i={index} 
                changeData={props.changeData} 
                data={props.data} key={index} 
                sClassName={props.sClassName} 
                className="card" 
                title={element.titulo} 
                descr={element.descricao} 
                label={props.label}
                status={element.status}
                />
            )
        })}
        </section>
    )
}