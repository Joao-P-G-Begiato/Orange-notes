export function Input(props){
    return (
        <input type={props.type} name={props.name} onBlur={()=>props.onBlur()} onChange={(e) =>{props.callback(e.target.value)}}></input>
    )
}