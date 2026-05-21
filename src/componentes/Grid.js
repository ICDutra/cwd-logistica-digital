import React, { useContext } from 'react';
import { FinanceContext } from '../contexts/FinanceContext';

const Grid = () => {
  const { transactions, deleteTransaction } = useContext(FinanceContext);

  // Função para deixar a data no formato brasileiro (DD/MM/AAAA)
  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div style={{ marginTop: '20px', background: 'white', borderRadius: '10px', padding: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #f0f2f5' }}>
            {/* Adicionada a coluna de Data */}
            <th style={{ textAlign: 'left', padding: '10px' }}>Data</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Descrição</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Valor</th>
            <th style={{ textAlign: 'center', padding: '10px' }}>Tipo</th>
            <th style={{ width: '50px' }}></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #f0f2f5' }}>
              {/* Exibindo a data formatada */}
              <td style={{ padding: '10px' }}>{formatDate(item.date)}</td>
              <td style={{ padding: '10px' }}>{item.desc}</td>
              <td style={{ padding: '10px' }}>R$ {Number(item.amount).toFixed(2)}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>
                {item.expense ? '🔴' : '🟢'}
              </td>
              <td style={{ padding: '10px' }}>
                <button 
                  onClick={() => deleteTransaction(item.id)} 
                  style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;