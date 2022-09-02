import { Header } from '../components/Header/Header'
import { Forms } from '../components/Forms/FormsLogin'
import { requisicao, tolkenGenerator } from '../services/Requisicao.js'
import './styles/Login.css'
import { useContext, useState } from 'react'
import {useNavigate} from "react-router-dom"
import {Context} from '../context/Context'


function tolkenGen(login, senha){
    return tolkenGenerator(login, senha)
}

export function Login(){
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState("hidden")
    const [tolken, setTolken] = useState("") 
    const [loading, setLoading] = useState("hidden")
    const [main, setMain] = useState('login')
    const [info, setInfo] = useState({tolken: "1101111111001011000011101110110011111001011101110110111111101001100101111001111011111110010110000111011101100111110010111011101101111111010011001011110011"})
    const navigate = useNavigate();
    const {activeUser,setActiveUser} = useContext(Context)


    return (
        <>
        <Header home="/" path="/login" label="Login" />
        <main className={main}>
            <Forms 
                input={["Usuário", "Senha"]} 
                type={["text", "password"]}  
                alert={alert}
                valida={[setUser, setPassword]}
                onBlur={()=>{setTolken(tolkenGen(user,password))}}
                onClick={()=>{
                    if(tolken == info.tolken){
                        setLoading("loading")
                        setMain("hidden")
                        requisicao()
                        .then(response=>{
                            setActiveUser(response)
                            console.log(activeUser)
                            navigate("/home")
                        })
                    }else{
                        setAlert("alert")
                    }
                }} 
            />
            <span className={alert}> Usuário e/ou senha inválidos ou não cadastrados </span>
        </main>
            <div className={loading}> Carregando...</div>
        
        </>
    )
}