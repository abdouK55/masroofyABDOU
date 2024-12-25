import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, BarElement, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Tooltip, Legend);

const VisualReports = () => {
  const [pieData, setPieData] = useState(null);
  const [barData, setBarData] = useState(null);

  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      const pieChartData = {
        labels: ['Groceries', 'Transportation', 'Entertainment'],
        datasets: [
          {
            label: 'Expenses by Category',
            data: [3000, 2000, 500],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };

      const barChartData = {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Income',
            data: [4000, 4500, 5000],
            backgroundColor: '#36A2EB',
          },
          {
            label: 'Expenses',
            data: [2000, 2500, 3000],
            backgroundColor: '#FF6384',
          },
        ],
      };

      setPieData(pieChartData);
      setBarData(barChartData);
    };

    fetchData();

    // Cleanup chart instances on unmount
    return () => {
      if (pieChartRef.current) {
        pieChartRef.current.destroy();
      }
      if (barChartRef.current) {
        barChartRef.current.destroy();
      }
    };
  }, []);

  // If data is not yet loaded, show loading message
  if (!pieData || !barData) {
    return <div>Loading visual reports...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Visual Reports</h2>

      {/* Pie chart section */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Category-wise Expense Distribution</h3>
        <div style={{ width: '100%', height: '400px' }}>
          <Pie ref={pieChartRef} data={pieData} />
        </div>
      </div>

      {/* Bar chart section */}
      <div>
        <h3>Monthly Income vs Expenses</h3>
        <div style={{ width: '100%', height: '400px' }}>
          <Bar ref={barChartRef} data={barData} />
        </div>
      </div>
    </div>
  );
};

export default VisualReports;
