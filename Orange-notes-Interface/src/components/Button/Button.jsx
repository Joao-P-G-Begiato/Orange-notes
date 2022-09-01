import './Button.css'

export function Button(props){
    return (
        <button 
        className={props.className} 
        onClick={(e) => {
            e.preventDefault()
            props.callback()
        }}
        >
            {props.label}
        </button>
    )
}