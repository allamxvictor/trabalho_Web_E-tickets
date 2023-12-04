/* eslint-disable react/prop-types */
import Card from '../Card';

import styles from './ListaCards.module.css';

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
