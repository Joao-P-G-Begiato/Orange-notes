import './Section.css'
import { Div } from '../Div/Div'

export function Section(props){
    return (
        <section className={props.className}>
            <Div className ={props.dclassName} title={props.title} tclassName={props.tclassName} content={props.content} content2={props.content2} cclassName={props.cclassName}/>
        </section>
    )
}