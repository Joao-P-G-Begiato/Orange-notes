import {Label} from '../Label/Label.jsx'
import {Input} from '../Input/InputLogin.jsx'
import {Button} from '../Button/Button'
import '../Forms/Forms.css'


export function Forms(props){    
    return (
        <form>
            {props.input.map((element,index)=>{
                        return (
                            <div key={index} className="divInput">
                                <Label htmlFor={element} label={element} />
                                <Input type={props.type[index]} onBlur={props.onBlur} name={element} callback={props.valida[index]}/>
                            </div>
                        )})}
            <Button label="Entrar" callback={props.onClick}/>
        </form>
    )
}

