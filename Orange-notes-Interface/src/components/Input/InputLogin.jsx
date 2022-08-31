export function Input(props){
    return (
        <input onBlur={() =>{props.onBlur}} type={props.type} name={props.name} onChange={(e) =>{props.callback(e.target.value == "OrangeNotes")}}></input>
    )
}