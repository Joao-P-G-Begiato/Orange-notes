import "./Div.css"

export function Div(props){
    return (
        <div className={props.className}>
            {props.content}
        </div>
    )
}