//import { useState } from "react"
import FormCadEvento from "../../componentes/FormCadEvento"
import Header from "../../componentes/Header"
import styles from "./CadEvento.module.css"

export default function CadEvento() {

   // const [listaDeEventos, setListaDeEventos] = useState([])

    // Função para adicionar um novo evento à lista
    //const adicionarEvento = (novoEvento) => {
       //novoEvento.preventDefault()
      //  setListaDeEventos([...listaDeEventos, novoEvento]);
      // <h1>Sou a lista de eventos: {listaDeEventos.map((evento, index) => <p key={index}>{evento.nomeEvento}</p>)}</h1>

   // };

    return (
        <>

            <Header />
            <div className={styles.loginForm_container}>
                <FormCadEvento/>

            </div>

        </>
    )
}
