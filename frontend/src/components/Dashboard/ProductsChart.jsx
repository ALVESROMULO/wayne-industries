import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../services/api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProductsChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/produtos');
        const produtos = response.data;

        // Group produtos by user
        const usersMap = {};
        produtos.forEach((produto) => {
          const userName = produto.user?.nome || 'Desconhecido';
          if (!usersMap[userName]) {
            usersMap[userName] = 0;
          }
          usersMap[userName]++;
        });

        const labels = Object.keys(usersMap);
        const data = Object.values(usersMap);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Recursos por Usuarios',
              data,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        });
      } catch (error) {
        console.error('Erro ao buscar recurso', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) return <div>Loading chart...</div>;

  return (
    <div className="chart-container">
      <h3>Distribuição de Recursos</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default ProductsChart;