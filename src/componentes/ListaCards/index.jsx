/* eslint-disable react/prop-types */
import Card from '../Card';

import styles from './ListaCards.module.css';

//TODO: importar dados do evento-reducer, passar para o card e criar o component listaCards que deve ser renderizado na Home.
const ListaCards = (props) => {
  return (
    <div className={styles.listaCards}>
      {props.map((evento) => (
        <Card key={evento.id} {...evento} />
      ))}
    </div>
  );
};

export default ListaCards;
