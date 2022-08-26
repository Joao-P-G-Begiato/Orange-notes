import './Section.css'
import '../Div/Div.css'

export function Section(props){
    return (
        <section className={props.className}>
            <div className={props.className}>
                <div className={props.tclassName}>
                {props.title}
                </div>
                <div className={props.cclassName}>
                    <div className="divmenor">
                        {props.content}
                    </div>
                    <div className="divmenor">
                        {props.content2}
                    </div>
                </div>
            </div>
        </section>
    )
}