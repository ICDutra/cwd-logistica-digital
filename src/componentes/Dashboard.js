import React, { useContext } from 'react';
import { FinanceContext } from '../contexts/FinanceContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
  const { transactions } = useContext(FinanceContext);
  // Cores para as categorias
  const COLORS = ['#10b981', '#ed1c24', '#f58e07', '#cfa91d', '#1dcfc9', '#db2777', '#a012bd', '#7c3aed', '#4b5563'];

  // Função helper para somar por categoria
  const getSumByCategory = (categoryName) => {
    return transactions
      .filter((t) => t.expense && t.category === categoryName)
      .reduce((acc, cur) => acc + cur.amount, 0);
  };

  // Calcula entrada total para o gráfico de pizza
  const totalEntradas = transactions.filter((t) => !t.expense).reduce((acc, cur) => acc + cur.amount, 0);

  // Lista de todas as suas categorias - NOME EXATO IGUAL AO FORM.JS
  const categories = [
    { name: 'Ajudante', val: getSumByCategory('Despesa do(s) ajudante(s)') },
    { name: 'Diesel', val: getSumByCategory('Diesel') },
    { name: 'Alimentação', val: getSumByCategory('Alimentação') },
    { name: 'Pedágios', val: getSumByCategory('Pedagios') },
    { name: 'Manutenção', val: getSumByCategory('Manutenção do veiculo') },
    { name: 'Autorização', val: getSumByCategory('Autorização de mudança') },
    { name: 'Outros', val: getSumByCategory('Outros') }
  ];

  const pieData = [
    { name: 'Entradas', value: totalEntradas },
    ...categories.filter(c => c.val > 0).map(c => ({ name: c.name, value: c.val }))
  ];

  // Filtramos apenas as transações que têm valor para o gráfico de linha não bugar
  const lineData = transactions.length > 0 ? transactions : [{ desc: 'Nenhum', amount: 0 }];

  return (
    <div style={{ display: 'flex', width: '100%', height: '250px', gap: '20px' }}>
      <ResponsiveContainer width="50%" height="100%">
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80}>
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="50%" height="100%">
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          {/* Usamos a Categoria para o eixo X, assim o gráfico entende os nomes novos */}
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;