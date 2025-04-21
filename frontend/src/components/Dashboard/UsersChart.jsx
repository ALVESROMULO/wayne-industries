import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import api from '../../services/api';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registra os componentes necessários do Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const UsersChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/users');
        const users = response.data;

        // Conta usuários por role
        const roleCount = users.reduce((acc, user) => {
          acc[user.funcao] = (acc[user.funcao] || 0) + 1;
          return acc;
        }, {});

        const labels = Object.keys(roleCount);
        const data = Object.values(roleCount);
        const backgroundColors = [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ];

        setChartData({
          labels,
          datasets: [
            {
              label: 'Usuarios administradores',
              data,
              backgroundColor: backgroundColors.slice(0, labels.length),
              borderColor: backgroundColors.map(color => color.replace('0.6', '1')),
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Erro ao buscar dados do usuario', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) return <div>Processando dados de usuarios...</div>;

  return (
    <div className="chart-container">
      <h3>Usuarios e administradores</h3>
      <div className="chart-wrapper">
        <Pie 
          data={chartData} 
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    const label = context.label || '';
                    const value = context.raw || 0;
                    const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${label}: ${value} (${percentage}%)`;
                  }
                }
              }
            }
          }} 
        />
      </div>
    </div>
  );
};

export default UsersChart;