import styles from "./SignUp.module.css"
import Header from "../../componentes/Header"
import FormCadastro from "../../componentes/FormCadastro"


export default function SignUp() {
    return (
        <>
            <div>
                <Header />
                <div className={styles.signUp_container}>
                    <FormCadastro />
                </div>

            </div>

        </>
    )

}