import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddTransaction = () => {
  const [form, setForm] = useState({
    name: '',
    amount: '',
    date: '',
    category: 'Groceries',
    type: 'Income',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Transaction added:', form);
    // Reset form
    setForm({ name: '', amount: '', date: '', category: 'Groceries', type: 'Income' });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add Transaction</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Transaction Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          style={styles.input}
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          style={styles.input}
        />
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          style={styles.select}
        >
          <option>Groceries</option>
          <option>Transportation</option>
          <option>Entertainment</option>
        </select>
        <div style={styles.radioContainer}>
          <label>
            <input
              type="radio"
              name="type"
              value="Income"
              checked={form.type === 'Income'}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            />
            Income
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Expense"
              checked={form.type === 'Expense'}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            />
            Expense
          </label>
        </div>
        <button type="submit" style={styles.button}>Add Transaction</button>
      </form>
      <Link to="/" style={styles.backButton}>Back to Home</Link>
    </div>
  );
};

const styles = {
  container: { padding: '20px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' },
  title: { marginBottom: '20px', fontSize: '24px', color: '#333' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' },
  select: { padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' },
  radioContainer: { margin: '10px 0', display: 'flex', justifyContent: 'center', gap: '20px' },
  button: { padding: '10px 20px', fontSize: '16px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  backButton: { display: 'block', marginTop: '20px', textDecoration: 'none', color: '#007BFF' },
};

export default AddTransaction;
