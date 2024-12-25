import React from 'react';
import { Link } from 'react-router-dom';

const TransactionList = () => {
  const transactions = [
    { id: 1, name: 'Salary', amount: 50000, date: '2024-12-01', category: 'Income' },
    { id: 2, name: 'Groceries', amount: 3000, date: '2024-12-02', category: 'Expense' },
  ]; // Example data

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Transaction List</h2>
      <ul style={styles.list}>
        {transactions.map((txn) => (
          <li key={txn.id} style={styles.listItem}>
            <p><strong>{txn.name}</strong> - DZD {txn.amount}</p>
            <p>Date: {txn.date}</p>
            <p>Category: {txn.category}</p>
          </li>
        ))}
      </ul>
      <Link to="/" style={styles.backButton}>Back to Home</Link>
    </div>
  );
};

const styles = {
  container: { padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' },
  title: { marginBottom: '20px', fontSize: '24px', color: '#333' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', textAlign: 'left' },
  backButton: { marginTop: '20px', textDecoration: 'none', color: '#007BFF' },
};

export default TransactionList;
