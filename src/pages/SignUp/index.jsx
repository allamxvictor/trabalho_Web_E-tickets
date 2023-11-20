import styles from "./SignUp.module.css"
import Header from "../../Componentes/Header"
import FormCadastro from "../../componentes/FormCadastro"


export default function Home() {
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