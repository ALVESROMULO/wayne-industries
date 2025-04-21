import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut, FiHome, FiPackage, FiPieChart } from 'react-icons/fi';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav className="navbar">
      <div className="navbar-brand">Wayne Industries. SGRI-Sistema Gerenciador de Recursos Interno</div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          <FiHome /> Home
        </Link>
        <Link to="/produtos" className="nav-link">
          <FiPackage /> Recursos
        </Link>
        {user.funcao === 'admin' && (
          <Link to="/dashboard" className="nav-link">
            <FiPieChart /> Dashboard
          </Link>
        )}
        <button onClick={handleLogout} className="nav-link">
          <FiLogOut /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;