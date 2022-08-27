export function InputList(props){
    return (
        <>
        <input list={props.list}></input>
        <datalist id={props.list}>
            {props.options.map((element,index)=>{
                return <option value={element}></option>
            })}
        </datalist>
        </>
    )
}