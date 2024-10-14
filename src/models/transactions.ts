export interface Transaction {
    id: string;
    type: 'income' | 'expense';
    category: string;
    amount: number;
    date: string; 
  }
  
  export interface AppState {
    transactions: Transaction[];
  }
  