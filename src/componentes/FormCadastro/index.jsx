import styles from "./FormCadastro.module.css"

export default function FormCadastro() {
    return (
        <section className={styles.form_container}>
            <h2>Crie sua conta</h2>
            
            <form action="" className={styles.form_inputs}>
                <input type="text" placeholder="Nome" />
                <input type="email"  placeholder="Email" />
                <input type="text" placeholder="Data de nascimento" />
                <input type="tel" placeholder="Telefone" />
                <input type="text" placeholder="CPF" />
                <input type="text" placeholder="Senha" />
            </form>

            <input type="button" value="Cadastrar" className={styles.button} />

        </section>
    )
}
