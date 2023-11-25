import { useState } from "react"
import styles from "./FormLogin.module.css"

export default function FormLogin() {
    
    const [user, setUser] = useState()
    const [password, setPassword] = useState()

    function handleLogin(event){
        event.preventDefault()
        console.log(user, password) //está aqui apenas se quiser a se os dados chegaram a função. Apagar apos implementar a lógica de banco 

        // aqui entra a lógica de verificação no banco de dados..

    }
    
    return (
        <>
            <form className={styles.formLogin_style} >
                <h2>Bem-vindo!</h2>

                <input type="text" placeholder="Email" onChange={(event) => setUser(event.target.value)} />
                <input type="password" placeholder="Senha" onChange={(event) => setPassword(event.target.value)} />

                <button onClick={handleLogin}>Entrar</button>

            </form>
        </>
   
    )

   

}
