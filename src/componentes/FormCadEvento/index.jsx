import styles from "./FormCadEvento.module.css"
import { useState } from "react"
import { useDispatch } from "react-redux";

export default function FormCadEvento() {

    /*
    function handleCadastroEvento(event) {
        event.preventDefault()

        console.log(nomeEvento, cidadeEvento, dataEvento,
            localEvento, horarioEvento, organizadorEvento, descricao,
            qtdIngressos, valorIgresso) // apagar dps.

        //aqui entra a lógica para o back enviar os dados pro banco.
    }*/

    const [novoEvento, setNovoEvento] = useState({
        nomeEvento: "",
        cidade: "",
        data: "",
        local: "",
        diaSemana: "",
        diaMes: "",
        mes: "",
    });


    const dispatch = useDispatch();

    const handleCadastroEvento = () => {
        dispatch(
            {
                type: "cadastrar/evento",
                payload: novoEvento
            }
        )
    }

    /*
    const [nomeEvento, setNomeEvento] = useState()
    const [cidadeEvento, setCidadeEvento] = useState()
    const [localEvento, setLocalEvento] = useState()
    const [dataEvento, setDataEvento] = useState()
    const [horarioEvento, setHorarioEvento] = useState()
    const [organizadorEvento, setOrganizadorEvento] = useState()
    const [descricao, setDescricao] = useState()
    const [qtdIngressos, setQtdIngressos] = useState()
    const [valorIgresso, setValorIngresso] = useState()
    */
    return (

        <section className={styles.form_container}>

            <h2>Cadastre seu novo evento</h2>

            <form className={styles.form_inputs}>

                <input type="text" placeholder="Nome do evento" onChange={(event) => setNovoEvento({ ...novoEvento, nomeEvento: event.target.value })} />
                <input type="text" placeholder="Cidade do evento" onChange={(event) => setNovoEvento({ ...novoEvento, cidade: event.target.value })} />
                <input type="text" placeholder="Local do evento" onChange={(event) => setNovoEvento({ ...novoEvento, local: event.target.value })} />
                <input type="text" placeholder="Dia da semana" onChange={(event) => setNovoEvento({ ...novoEvento, diaSemana: event.target.value })} />
                <input type="text" placeholder="Dia do mês" onChange={(event) => setNovoEvento({ ...novoEvento, diaMes: event.target.value })} />
                <input type="text" placeholder="Mês" onChange={(event) => setNovoEvento({ ...novoEvento, mes: event.target.value })} />

                <button type="button" onClick={handleCadastroEvento}>Cadastrar</button>


            </form>

        </section>
    )
}


