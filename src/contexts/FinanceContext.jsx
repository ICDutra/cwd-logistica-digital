import React, { createContext, useState, useEffect } from 'react';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  // 1. Carrega os dados do navegador ao iniciar, ou começa vazio []
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Salva no navegador toda vez que a lista mudar
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // CÁLCULOS CORRIGIDOS PARA 'Entrada' e 'Saída'
  const amountExpense = transactions
    .filter((item) => item.type === 'Saída')
    .map((t) => Number(t.amount));

  const amountIncome = transactions
    .filter((item) => item.type === 'Entrada')
    .map((t) => Number(t.amount));

  const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
  const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
  const total = (income - expense).toFixed(2);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Math.random(),
      date: transaction.date || new Date().toLocaleDateString('pt-BR').split('/')[0] + ' Mar'
    };
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction, deleteTransaction, income, expense, total }}>
      {children}
    </FinanceContext.Provider>
  );
};