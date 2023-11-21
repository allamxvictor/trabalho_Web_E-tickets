import FormLogin from "../../componentes/FormLogin"
import Header from "../../componentes/Header"
import styles from "./LoginPage.module.css"

export default function LoginPage() {

    return (
        <>
             
                <Header />
                <div className={styles.loginForm_container}>
                    <FormLogin />

                </div>
            
        </>
    )
}
