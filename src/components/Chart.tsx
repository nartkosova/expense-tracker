import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js'; 
import { Transaction } from '../models/transactions';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const Chart: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  const categories = ['Food', 'Utilities', 'Entertainment'];

  const expenses = categories.map(category => {
    return transactions
      .filter(transaction => transaction.category === category)
      .reduce((total, transaction) => total + transaction.amount, 0);
  });

  const chartData = {
    labels: categories,
    datasets: [{
      label: 'Expenses',
      data: expenses,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Bar data={chartData} />;
};

export default Chart;
