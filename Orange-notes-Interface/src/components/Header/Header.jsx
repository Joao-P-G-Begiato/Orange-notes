import "./Header.css"
import  logo from"./Orange-Note.png" 
import {Link} from 'react-router-dom'
import {Button} from '../Button/Button.jsx'

export function Header(props){
    return (
        <header className="navbar">
            <img className="img" src={logo} />
            <h1 className="ONtitle">Orange Notes</h1>
            <nav>
                <Link to={props.path}>
                    <Button label={props.label}/>
                </Link>
            </nav>
        </header>
    )
}