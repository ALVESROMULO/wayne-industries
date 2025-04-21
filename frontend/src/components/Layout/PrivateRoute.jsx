import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const PrivateRoute = ({ children, requiredRole }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Processando...</div>;

  if (!user) return <Navigate to="/login" />;

  if (requiredRole && user.funcao !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;