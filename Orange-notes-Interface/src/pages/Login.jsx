import { Header } from '../components/Header/Header'
import { Forms } from '../components/Forms/Forms'
import './styles/Login.css'

export function Login(){
    return (
        <>
        <Header home="/" path="/login" label="Login" />
        <main className='login'>
            <Forms input={["Nome", "Senha"]} />
        </main>
        <h1>Tela de Login</h1>
        </>
    )
}