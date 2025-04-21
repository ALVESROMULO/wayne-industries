import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Se não estiver autenticado, redireciona para login
  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="home-page">
      <h1>Benvindo, {user.name}!</h1>
      
      <div className="user-info">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Função:</strong> {user.funcao}</p>
      </div>

      <div className="quick-actions">
        <h2>Acesso rapido</h2>
        <div className="action-buttons">
          <button 
            onClick={() => navigate('/produtos')}
            className="btn-primary"
          >
            Gerenciar Recursos
          </button>
          
          {user.funcao === 'admin' && (
            <button
              onClick={() => navigate('/dashboard')}
              className="btn-primary"
            >
              Visualizar Dashboard
            </button>
          )}
        </div>
      </div>

      <div className="recent-activity">
        <h2>Atividades Recentes</h2>
        <div className="activity-list">
          {/* Aqui você pode adicionar uma lista de atividades recentes */}
          <div className="activity-item">
            <p>Bem vindo ao SGRI - Sistema de Gerenciamento de Recursos Interno.</p>
            <small>@Wayne Industries - 2025</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;