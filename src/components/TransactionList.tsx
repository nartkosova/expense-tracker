import React from 'react';
import { Transaction } from '../models/transactions';

interface TransactionListProps {
  transactions: Transaction[];
  deleteTransaction: (id: string) => void; 
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, deleteTransaction }) => {
  if (transactions.length === 0) {
    return <p>No transactions available.</p>;
  }

  return (
    <div>
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount.toFixed(2)} $</td>
              <td>{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</td>
              <td>
                <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
