import FormCadEvento from "../../componentes/FormCadEvento"
import Header from "../../componentes/Header"
import styles from "./CadEvento.module.css"

export default function CadEvento() {

    return (
        <>

            <Header />
            <div className={styles.loginForm_container}>
                <FormCadEvento/>

            </div>

        </>
    )
}
