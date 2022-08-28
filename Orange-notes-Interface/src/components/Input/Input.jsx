export function Input(props){
    return (
        <input type={props.type} name={props.name} onChange={(e) =>{props.callback(e.target.value)}}></input>
    )
}