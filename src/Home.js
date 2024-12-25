import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [transactions, setTransactions] = useState([]);
  const [totals, setTotals] = useState({ income: 0, expenses: 0 });

  useEffect(() => {
    // Fetch transactions from backend
    axios.get('http://localhost:5000/transactions')
      .then((response) => {
        const data = response.data;
        setTransactions(data);

        // Calculate totals
        const income = data
          .filter((txn) => txn.type === 'Income')
          .reduce((acc, curr) => acc + curr.amount, 0);

        const expenses = data
          .filter((txn) => txn.type === 'Expense')
          .reduce((acc, curr) => acc + curr.amount, 0);

        setTotals({ income, expenses });
      })
      .catch((error) => console.log('Error fetching transactions:', error));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Masroofy</h1>

      {/* Overview Section */}
      <div style={styles.overview}>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Total Income</p>
          <p style={styles.cardValue}>DZD {totals.income}</p>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Total Expenses</p>
          <p style={styles.cardValue}>DZD {totals.expenses}</p>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Balance</p>
          <p style={styles.cardValue}>DZD {totals.income - totals.expenses}</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav style={styles.nav}>
        <Link to="/add" style={styles.button}>Add Transaction</Link>
        <Link to="/list" style={styles.button}>Transaction List</Link>
        <Link to="/reports" style={styles.button}>Visual Reports</Link>
      </nav>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
  },
  overview: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  card: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '10px',
    minWidth: '150px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#555',
    marginBottom: '10px',
  },
  cardValue: {
    fontSize: '20px',
    color: '#007BFF',
  },
  nav: {
    marginTop: '20px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#007BFF',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default HomePage;
