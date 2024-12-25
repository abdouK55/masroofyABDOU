import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';
import VisualReports from './VisualReports';
import logo from './logo.svg';
import './App.css';

function App() {
  // State for transactions
  const [transactions, setTransactions] = useState([]);

  // Function to add a transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Function to delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };
  
  return (
    <div  className="App">
       
      <Router>
        <Routes>
          <Route path="/" element={<Home transactions={transactions} />} />
          <Route path="/add" element={<AddTransaction addTransaction={addTransaction} />} />
          <Route path="/list" element={<TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />} />
          <Route path="/reports" element={<VisualReports transactions={transactions} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;