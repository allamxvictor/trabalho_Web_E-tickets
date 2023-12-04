import React, { useState } from 'react'; // TODO: verificar causa de aviso de não uso.
import styles from './ResumoCompra.module.css';

//TODO: criar um reducer para esses dados.
const ResumoCompra = ({ subTotal, taxa, total }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles['resumo-compra']}>
      <h3 className={styles['titulo-centralizado']}>Resumo </h3>
      <p>Subtotal: R$ {subTotal ?? 0.00.toFixed(2)}</p>
      <p>Taxa: R$ {taxa ?? 0.00.toFixed(2)}</p>
      <p>Total: R$ {total ?? 0.00.toFixed(2)}</p>

      <div className={styles['opcoes-pagamento']}>
        <label>
          <input
            type="checkbox"
            value="pix"
            checked={selectedOption === 'pix'}
            onChange={() => handleOptionChange('pix')}
          />
          PIX
        </label>

        <label>
          <input
            type="checkbox"
            value="cartao"
            checked={selectedOption === 'cartao'}
            onChange={() => handleOptionChange('cartao')}
          />
          Cartão de Crédito
        </label>

        <label>
          <input
            type="checkbox"
            value="boleto"
            checked={selectedOption === 'boleto'}
            onChange={() => handleOptionChange('boleto')}
          />
          Boleto
        </label>
      </div>

      <button className={styles['botao-pagar']} onClick={() => console.log(`Pagamento selecionado: ${selectedOption}`)}>
        Pagar
      </button>
    </div>
  );
};

export default ResumoCompra;
