import React, { useState } from 'react';
import styles from './IngressosDisponiveis.module.css';

const IngressosDisponiveis = () => {
  const [tipoIngresso, setTipoIngresso] = useState('inteira');
  const [quantidade, setQuantidade] = useState(1);

  const handleCompra = () => {
    
    console.log(`Compra de ${quantidade} ingresso(s) do tipo ${tipoIngresso}`);
  };

  return (
    <div className={styles.ingressosDisponiveis}>
      <h3>Ingressos Disponíveis</h3>
      <p>Descrição do evento:</p>
      <p>Lote: Lote 1</p>
      
      <form>
        <label>Tipo de Ingresso:</label>
        <select value={tipoIngresso} onChange={(e) => setTipoIngresso(e.target.value)}>
          <option value="inteira">Inteira</option>
          <option value="meia">Meia</option>
        </select>

        <label>Quantidade:</label>
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          min="1"
        />
        <button type="button" onClick={handleCompra}>
          Comprar
        </button>
      </form>
    </div>
  );
};
export default IngressosDisponiveis;
