import { useState } from "react"
import styles from "./FormLogin.module.css"
import {Link} from "react-router-dom"

export default function FormLogin() {

    const [user, setUser] = useState()
    const [senha, setSenha] = useState()

    function handleLogin(event) {
        event.preventDefault()
        console.log(user, senha) 

        // aqui entra a lógica de verificação no banco de dados..

    }

    return (
        <>
            <form className={styles.formLogin_style} >
                <h2>Bem-vindo!</h2>

                <input type="text" placeholder="Email" onChange={(event) => setUser(event.target.value)} />
                <input type="password" placeholder="Senha" onChange={(event) => setSenha(event.target.value)} />

                <button type="submit" onClick={handleLogin}>Entrar</button>

                <p>Ainda não tem uma conta?<Link to="/signUp"> Criar conta</Link></p>

            </form>
        </>

    )
}
