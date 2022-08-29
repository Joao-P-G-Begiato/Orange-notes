export function InputList(props){
    return (
        <>
        <input list={props.list} onChange={props.onChange}></input>
        <datalist id={props.list}>
            {props.options.map((element,index)=>{
                return <option key={index} value={element}></option>
            })}
        </datalist>
        </>
    )
}