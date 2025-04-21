import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import ProdutoForm from '../components/Produtos/ProdutoForm';
import ProdutoList from '../components/Produtos/ProdutoList';
import { AuthContext } from '../contexts/AuthContext';

const ProdutosPage = () => {
  const [produtos, setProdutos] = useState([]);
  const [editingProduto, setEditingProduto] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    fetchProdutos();
  }, [user]);

  const fetchProdutos = async () => {
    try {
      const response = await api.get('/produtos');
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar recurso:', error);
    }
  };

  const handleCreate = async (produtoData) => {
    try {
      await api.post('/produtos', produtoData);
      fetchProdutos();
    } catch (error) {
      console.error('Error criando recurso:', error);
    }
  };

  const handleUpdate = async (id, produtoData) => {
    try {
      await api.put(`/produtos/${id}`, produtoData);
      setEditingProduto(null);
      fetchProdutos();
    } catch (error) {
      console.error('Error atualizando recurso:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/produtos/${id}`);
      fetchProdutos();
    } catch (error) {
      console.error('Error deletando recurso:', error);
    }
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="products-page">
      <h1>Gerenciamento de Recursos</h1>
      <ProdutoForm
        onSubmit={editingProduto ? handleUpdate : handleCreate}
        initialData={editingProduto}
      />
      <ProdutoList
        produtos={produtos}
        onEdit={setEditingProduto}
        onDelete={handleDelete}
        currentUserId={user.userId}
      />
    </div>
  );
};

export default ProdutosPage;