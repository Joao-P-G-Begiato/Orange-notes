import "./Div.css"

export function Div(props){
    return (
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
    )
}

