import { useState, useEffect, useContext } from 'react';
import api from '../services/api';
import StatsCard from '../components/Dashboard/StatsCard';
import ProductsChart from '../components/Dashboard/ProductsChart';
import UsersChart from '../components/Dashboard/UsersChart';
import { AuthContext } from '../contexts/AuthContext';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    produtos: 0,
    users: 0,
    lowStock: 0,
  });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.funcao !== 'admin') return;
    fetchStats();
  }, [user]);

  const fetchStats = async () => {
    try {
      const [produtosRes, usersRes] = await Promise.all([
        api.get('/produtos'),
        api.get('/users'),
      ]);

      const lowStock = produtosRes.data.filter(
        (p) => p.quantidade < 10
      ).length;

      setStats({
        produtos: produtosRes.data.length,
        users: usersRes.data.length,
        lowStock,
      });
    } catch (error) {
      console.error('Erro ao buscar status:', error);
    }
  };

  if (user?.funcao !== 'admin') {
    return <div>Acesso negado. Somente para admin.</div>;
  }

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <StatsCard title="Total de Recursos" value={stats.produtos} />
        <StatsCard title="Total de Usuarios" value={stats.users} />
        <StatsCard title="Estoque abaixo de 10 und" value={stats.lowStock} />
      </div>
      <div className="charts-container">
        <ProductsChart />
        <UsersChart />
      </div>
    </div>
  );
};

export default DashboardPage;