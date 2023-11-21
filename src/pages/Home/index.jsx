import Card from "../../componentes/Card";
import Header from "../../componentes/Header";
import SearchBar from "../../componentes/SearchBar";
import styles from "./Home.module.css"


export default function Home() {
    return (
        <>
            <div className={styles.page_container}>
                <Header />
                <div className={styles.searchBar_container}>
                    <SearchBar />

                </div>

                <div className={styles.cards_container}>
                    <Card diaDaSemana="Dom" diaDoMes="23"
                        mes="Dezembro" cidadeDoEvento="Russas"
                        nomeDoEvento="Carnaval" localDoEvento="Praça da Matriz" />

                </div>
            </div>

        </>
    )

}
