import './Section.css'
import { Div } from '../Div/Div'

export function Section(props){
    return (
        <section className={props.className}>
            <Div content={props.title} className={props.tclassName}/>
            <Div content={props.content} className={props.cclassName}/>
        </section>
    )
}