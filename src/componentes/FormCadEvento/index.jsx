import styles from "./FormCadEvento.module.css"
import { useState } from "react"

export default function FormCadEvento() {

    function handleCadastroEvento(event) {
        event.preventDefault()

        console.log(nomeEvento, contato, cidadeEvento, dataEvento,
            localEvento, horarioEvento, organizadorEvento, descricao,
            qtdIngressos, valorIgresso) // apagar dps.

        //aqui entra a lógica para o back enviar os dados pro banco.
    }

    const [nomeEvento, setNomeEvento] = useState()
    const [cidadeEvento, setCidadeEvento] = useState()
    const [localEvento, setLocalEvento] = useState()
    const [dataEvento, setDataEvento] = useState()
    const [horarioEvento, setHorarioEvento] = useState()
    const [organizadorEvento, setOrganizadorEvento] = useState()
    const [descricao, setDescricao] = useState()
    const [contato, setContato] = useState()
    const [qtdIngressos, setQtdIngressos] = useState()
    const [valorIgresso, setValorIngresso] = useState()

    return (

        <section className={styles.form_container}>
           
            <h2>Cadastre seu novo evento</h2>

            <form className={styles.form_inputs}>
                <input type="text" placeholder="Nome do evento" onChange={(event) => setNomeEvento(event.target.value)} />
                <input type="email" placeholder="Cidade do evento" onChange={(event) => setCidadeEvento(event.target.value)} />
                <input type="text" placeholder="Local do evento" onChange={(event) => setLocalEvento(event.target.value)} />
                <input type="text" placeholder="Data do evento" onChange={(event) => setDataEvento(event.target.value)} />
                <input type="text" placeholder="Horario do evento" onChange={(event) => setHorarioEvento(event.target.value)} />
                <input type="text" placeholder="Quantidade de ingressos" onChange={(event) => setQtdIngressos(event.target.value)} />
                <input type="text" placeholder="Valor do ingresso R$" onChange={(event) => setValorIngresso(event.target.value)} />
                <input type="text" placeholder="Organizador do ingresso" onChange={(event) => setOrganizadorEvento(event.target.value)} />
                <input type="tel" placeholder="Telefone para contato" onChange={(event) => setContato(event.target.value)} />
                <input type="text-field" placeholder="descrição do evento" onChange={(event) => setDescricao(event.target.value)} />

                <button type="submit" onClick={handleCadastroEvento}>Cadastrar</button>

            </form>

        </section>
    )
}
