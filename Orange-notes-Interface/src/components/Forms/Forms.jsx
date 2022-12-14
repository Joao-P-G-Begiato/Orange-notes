import {Label} from '../Label/Label.jsx'
import {Input} from '../Input/Input.jsx'
import {Button} from '../Button/Button'
import {Link} from 'react-router-dom'
import '../Forms/Forms.css'


export function Forms(props){    
    return (
        <form  className={props.className}>
            {props.input.map((element,index)=>{
                        return (
                            <div key={index} className="divInput">
                                <Label htmlFor={element} label={element} />
                                <Input type={props.type[index]} name={element} callback={props.callback[index]}/>
                            </div>
                        )})}
            <Button label="Salvar" callback={props.onClick}/>
        </form>
    )
}

