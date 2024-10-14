import React, { useState } from 'react';
import { Transaction } from '../models/transactions';

const TransactionForm: React.FC<{ addTransaction: (transaction: Transaction) => void }> = ({ addTransaction }) => {
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [type, setType] = useState<'income' | 'expense'>('expense');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTransaction: Transaction = {
      id: new Date().toISOString(),
      amount,
      category,
      type,
      date: new Date().toISOString(),
    };
    addTransaction(newTransaction);
    setAmount(0);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} placeholder="Amount" required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option >Select</option>
        <option value="Food">Food</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
