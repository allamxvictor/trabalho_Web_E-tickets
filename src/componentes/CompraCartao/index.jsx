import React, { useState } from 'react';
import styles from './CartaoCompra.module.css';

const CartaoCompra = () => {
  const [numeroCartao, setNumeroCartao] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [codigoSeguranca, setCodigoSeguranca] = useState('');
  const [quantidadeParcelas, setQuantidadeParcelas] = useState(1);

  const handleNumeroCartaoChange = (e) => {

    const formattedValue = e.target.value.replace(/\D/g, '');

    const formattedNumber = formattedValue.match(/.{1,4}/g)?.join(' ') || '';

    setNumeroCartao(formattedNumber);
  };

  const handleDataValidadeChange = (e) => {

    const formattedValue = e.target.value.replace(/\D/g, '');

    const formattedDate = formattedValue.replace(/^(.{2})(.{2})$/, '$1/$2');

    setDataValidade(formattedDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Dados do cartão enviados:', {
      numeroCartao,
      nomeTitular,
      dataValidade,
      codigoSeguranca,
      quantidadeParcelas,
    });
  };

  return (
    <div className={styles.cartaoCompra}>
      <h3>Informações do Cartão</h3>
      <form onSubmit={handleSubmit}>
        <label>Número do Cartão:</label>
        <input
          type="text"
          value={numeroCartao}
          onChange={handleNumeroCartaoChange}
          maxLength="19"
          required
        />

        <label className={styles.labelNomeTitular}>Nome do Titular:</label>
        <input
          type="text"
          value={nomeTitular}
          onChange={(e) => setNomeTitular(e.target.value)}
          maxLength="100"
          className={styles.inputMedium}
          required
        />

        <label className={styles.labelDataValidade}>Data de Validade:</label>
        <input
          type="text"
          value={dataValidade}
          onChange={handleDataValidadeChange}
          maxLength="5"
          className={styles.inputSmall}
          placeholder="MM/AA"
          required
        />

        <label className={styles.labelCodigoSeguranca}>Código de Segurança:</label>
        <input
          type="text"
          value={codigoSeguranca}
          onChange={(e) => setCodigoSeguranca(e.target.value)}
          maxLength="3"
          className={styles.inputSmall}
          required
        />

        <label>Quantidade de Parcelas:</label>
        <select
          value={quantidadeParcelas}
          onChange={(e) => setQuantidadeParcelas(Number(e.target.value))}
          className={styles.inputLarge}
        >
          {[...Array(12).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1} parcela{num !== 0 && 's'}
            </option>
          ))}
        </select>

        <button type="submit" className={styles.buttonConfirmar}>
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default CartaoCompra;
