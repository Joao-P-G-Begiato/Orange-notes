import './Button.css'

export function Button(props){
    return (
        <button onClick={props.callback}>{props.label}</button>
    )
}