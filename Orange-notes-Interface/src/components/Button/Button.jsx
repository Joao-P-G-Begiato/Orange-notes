import './Button.css'

export function Button(props){
    return (
        <button className={props.className} onClick={props.callback}>{props.label}</button>
    )
}