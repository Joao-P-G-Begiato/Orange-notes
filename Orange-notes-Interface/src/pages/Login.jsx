import { Header } from '../components/Header/Header'
import { Forms } from '../components/Forms/FormsLogin'
import { Requisicao, tolkenGenerator } from '../services/Requisicao.js'
import './styles/Login.css'
import { useEffect, useState } from 'react'

async function clickButton(login){
    const result = await Requisicao(login)
    return result
}

function tolkenGen(login, senha){
    return tolkenGenerator(login, senha)
}

export function Login(){
    const [path, setPath] = useState("")
    const [user, setUser] = useState(false)
    const [password, setPassword] = useState(false)
    const [alert, setAlert] = useState("hidden")
    const [tolken, setTolken] = useState("") 

    useEffect(()=>{
        if(password && user){
            setPath("/home")
        }
    },[user, password])
    return (
        <>
        <Header home="/" path="/login" label="Login" />
        <main className='login'>
            <Forms input={["Usuário", "Senha"]} onBlur={[clickButton, setTolken(tolkenGen(user, password))]} type={["text", "password"]}  path={path} alert={alert}
            valida={[setUser, setPassword]}  setPath={setPath} onClick={()=>{setAlert("alert")}} 
            />
            <span className={alert}> Usuário e/ou senha inválidos ou não cadastrados </span>
        </main>
        
        </>
    )
}