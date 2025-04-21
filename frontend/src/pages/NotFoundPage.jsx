import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>A página que você procura não existe ou foi movida.</p>
        <button 
          onClick={() => navigate(-1)} 
          className="btn-primary"
        >
          <FiArrowLeft /> Voltar
        </button>
        <div className="additional-options">
          <p>Ou voce pode:</p>
          <button 
            onClick={() => navigate('/')} 
            className="btn-secondary"
          >
            Ir para Homepage
          </button>
          <button 
            onClick={() => navigate('/produtos')} 
            className="btn-secondary"
          >
            Exibir Recursos
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;