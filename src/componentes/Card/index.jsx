import styles from "./Card.module.css"

export default function Card() {
    return (
        <section className={styles.card}>
            <img src="../../assets/images.jpeg" alt="Imagem de divulgação do evento." />

            <div className={styles.card_txt_container}>

                <div className={styles.card_data_evento}>
                    <h3>sáb</h3>
                    <span>dd</span>
                    <p>Mês</p>
                </div>

                <div className={styles.card_info_evento}>
                    <span>cidade do evento</span>
                    <h3>Nome do evento</h3>
                    <p>Local do evento</p>
                </div>
            </div>
        </section>
    )
}