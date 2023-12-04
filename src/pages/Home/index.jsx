import Card from "../../componentes/Card";
import Header from "../../componentes/Header";
import SearchBar from "../../componentes/SearchBar";
import styles from "./Home.module.css"
import { useSelector } from "react-redux";


export default function Home() {

    const { currentEvento } = useSelector(rootReducer => rootReducer.eventoReducer)

    return (
        <>
            <div className={styles.page_container}>
                <Header />
                <div className={styles.searchBar_container}>
                    <SearchBar />

                </div>

                <div className={styles.cards_container}>
                    <Card diaDaSemana={currentEvento.diaSemana} diaDoMes={currentEvento.diaMes}
                        mes={currentEvento.mes} cidadeDoEvento={currentEvento.cidade}
                        nomeDoEvento={currentEvento.nomeEvento} localDoEvento={currentEvento.local} />
                </div>
            </div>

        </>
    )

}
