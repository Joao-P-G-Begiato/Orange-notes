import "./Header.css"
import {Link} from 'react-router-dom'
import {Button} from '../Button/Button.jsx'

export function Header(props){
    return (
        <header className="navbar">
            <img className="img" src= "https://d335luupugsy2.cloudfront.net/cms/files/107693/1639661491/$s20z34nynz" />
            <nav>
                <Link to={props.path}>
                    <Button label={props.label}/>
                </Link>
            </nav>
        </header>
    )
}