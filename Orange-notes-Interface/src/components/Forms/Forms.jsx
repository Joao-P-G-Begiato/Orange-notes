import {Label} from '../Label/Label.jsx'
import {Input} from '../Input/Input.jsx'
import '../Forms/Forms.css'

export function Forms(props){
    return (
        <form>
            {props.input.map((element,index)=>{
                        return (
                            <div key={index}>
                                <Label htmlFor={element} label={element} />
                                <Input type="text" name={element}/>
                            </div>
                        )})}
        </form>
    )
}

