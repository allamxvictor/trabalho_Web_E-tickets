import styles from "./FormCadastro.module.css"
import Button from "../Button"

export default function FormCadastro() {
    return (
        
        //TODO: substituir os imputs pelo componete Input, adcionar useState e configurar evento do botão.
        <section className={styles.form_container}>
            <h2>Crie sua conta</h2>

            
            <form action="" className={styles.form_inputs}>
                <input type="text" placeholder="Nome" /> 
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Data de nascimento" />
                <input type="tel" placeholder="Telefone" />
                <input type="text" placeholder="CPF" />
                <input type="text" placeholder="Senha" />
            </form>

            <Button button_txt="Cadastrar" />
            


        </section>
    )
}
