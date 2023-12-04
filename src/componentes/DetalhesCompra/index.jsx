import React from 'react';
  import styles from './DetalhesCompra.module.css';
  
  const DetalhesCompra = ({ nomeEvento, tipoIngresso, valor, quantidade }) => {
    const valorFormatado = valor ? valor.toFixed(2) : 'Valor Indefinido';
  
    return (
      <div className={styles.detalhesCompraContainer}>
        <div className={styles.detalhesCompraInfo}>
          <h3>Detalhes da Compra</h3>
          <p>Evento: {nomeEvento}</p>
          <p>Tipo de Ingresso: {tipoIngresso}</p>
        </div>
  
        <div className={styles.detalhesCompraResumo}>
          <p>Valor: R$ {valorFormatado}</p>
          <p>Quantidade: {quantidade}</p>
          <p>Total: R$ {valor ? (valor * quantidade).toFixed(2) : 'Valor Indefinido'}</p>
        </div>
      </div>
    );
  };
export default DetalhesCompra;
  