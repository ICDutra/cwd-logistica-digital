import React, { useContext } from 'react';
import { FinanceContext } from '../contexts/FinanceContext';

const Resume = () => {
  // Agora pegamos a lista de transações completa do contexto
  const { transactions } = useContext(FinanceContext);

  // Lógica de cálculo dos totais
  const income = transactions
    .filter((item) => !item.expense)
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const expense = transactions
    .filter((item) => item.expense)
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const total = income - expense;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3>Entradas</h3>
        <p style={{ color: 'green', fontSize: '1.5rem' }}>R$ {income.toFixed(2)}</p>
      </div>
      <div style={styles.card}>
        <h3>Saídas</h3>
        <p style={{ color: 'red', fontSize: '1.5rem' }}>R$ {expense.toFixed(2)}</p>
      </div>
      <div style={styles.card}>
        <h3>Saldo</h3>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>R$ {total.toFixed(2)}</p>
      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' },
  card: { background: 'white', padding: '20px', borderRadius: '10px', flex: '1', minWidth: '200px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }
};

export default Resume;