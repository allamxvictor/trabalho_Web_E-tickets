import styles from "./Card.module.css"
import  PropTypes from "prop-types"

export default function Card({imgDoEvento, diaDaSemana, diaDoMes, mes, cidadeDoEvento, nomeDoEvento, localDoEvento}) {
    return (
        <section className={styles.card}>
            <img src={imgDoEvento} alt="Imagem de divulgação do evento." />

            <div className={styles.card_txt_container}>

                <div className={styles.card_data_evento}>
                    <h3>{diaDaSemana}</h3>
                    <span>{diaDoMes}</span>
                    <p>{mes}</p>
                </div>

                <div className={styles.card_info_evento}>
                    <span>{cidadeDoEvento}</span>
                    <h3>{nomeDoEvento}</h3>
                    <p>{localDoEvento}</p>
                </div>
            </div>
        </section>
    )
}

Card.prototypes = {
    imgDoEvento: PropTypes.string,
    diaDaSemana: PropTypes.string.isRequired,
    diaDoMes: PropTypes.string.isRequired,
    mes: PropTypes.string.isRequired,
    cidadeDoEvento: PropTypes.string.isRequired,
    nomeDoEvento: PropTypes.string.isRequired,
    localDoEvento: PropTypes.string.isRequired
}

Card.defaultProps = {
    imgDoEvento: "../../assets"
}