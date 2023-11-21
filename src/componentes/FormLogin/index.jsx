import Button from "../Button"
import Input from "../Input"
import styles from "./FormLogin.module.css"

export default function FormLogin() {
    return (
        <>
            <form className={styles.formLogin_style} >
                <h2>Bem-vindo!</h2>

                <Input input_type="text" input_placeholder="Email" />
                <Input input_type="text" input_placeholder="Senha" />

                <Button button_txt="Entrar" />
            </form>
        </>



    )

}
