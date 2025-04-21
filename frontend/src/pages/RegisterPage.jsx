import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth';

const RegisterPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(nome, email, senha);
      setSuccess(true);
      setError('');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Falha ao registrar');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Registrar</h2>
        {error && <div className="alert error">{error}</div>}
        {success && (
          <div className="alert success">
            Registro realizado com sucesso! Redirecionando para login...
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Registrar
          </button>
        </form>
        <p>
        Voce ja tem uma conta? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;