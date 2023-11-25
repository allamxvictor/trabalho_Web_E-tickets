import styles from "./FormCadastro.module.css"
import { useState } from "react"

export default function FormCadastro() {
   
    function handleCadastro(event){
        event.preventDefault() 

        console.log(nome, email, dataNascimento, telefone, cpf, senha) // apagar dps.

        //aqui entra a lógica para o back enviar os dados pro banco.

    }
   
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [dataNascimento, setDataNascimento] = useState()
    const [telefone, setTelefone] = useState()
    const [cpf, setCpf] = useState()
    const [senha, setSenha] = useState()

    return (
        
        <section className={styles.form_container}>
            <h2>Crie sua conta</h2>

            
            <form className={styles.form_inputs}>
                <input type="text" placeholder="Nome" onChange={(event) => setNome(event.target.value)} /> 
                <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
                <input type="text" placeholder="Data de nascimento" onChange={(event) => setDataNascimento(event.target.value)}/>
                <input type="tel" placeholder="Telefone" onChange={(event) => setTelefone(event.target.value)}/>
                <input type="text" placeholder="CPF" onChange={(event) => setCpf(event.target.value)}/>
                <input type="password" placeholder="Senha" onChange={(event) => setSenha(event.target.value)}/>

                <button type="submit" onClick={handleCadastro}>Cadastrar</button>

            </form>
            
        </section>
    )
}
