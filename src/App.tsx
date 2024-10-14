import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList'; 
import { Transaction } from './models/transactions';
import Chart from './components/Chart';
import './App.css'

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} /> 
      <Chart transactions={transactions}/>
    </div>
  );
};

export default App;
