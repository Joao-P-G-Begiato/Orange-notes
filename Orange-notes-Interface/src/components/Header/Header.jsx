import "./Header.css"
import  logo from"./Orange-Note.png" 
import {Link, useNavigate} from 'react-router-dom'
import {Button} from '../Button/Button.jsx'

export function Header(props){
    const navigate = useNavigate()
    return (
        <header className="navbar">
            <Link to={props.home} ><img className="img" src={logo} /></Link>
            <h1 className="ONtitle">Orange Notes</h1>
            <nav>
                <Link to={props.path}>
                    <Button label={props.label} callback={()=> navigate(props.path)}/>
                </Link>
            </nav>
        </header>
    )
}