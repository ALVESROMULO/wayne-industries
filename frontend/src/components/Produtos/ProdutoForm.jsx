import { useState, useEffect } from 'react';

const ProdutoForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        nome: initialData.nome,
        descricao: initialData.descricao || '',
        preco: initialData.preco.toString(),
        quantidade: initialData.quantidade.toString(),
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  const produtoData = {
      ...formData,
      preco: parseFloat(formData.preco),
      quantidade: parseInt(formData.quantidade),
    };
     
     
    initialData ? onSubmit(initialData?.id,produtoData) : onSubmit(produtoData)


    if (!initialData) {
      setFormData({
        nome: '',
        descricao: '',
        preco: '',
        quantidade: '',
      });
    }
  };

  return (
    <div className="product-form">
      <h2>{initialData ? 'Editar Recurso' : 'Adicionar novo Recurso'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Descricao:</label>
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Preco</label>
          <input
            type="number"
            name="preco"
            step="0.01"
            min="0"
            value={formData.preco}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantidade</label>
          <input
            type="number"
            name="quantidade"
            min="0"
            value={formData.quantidade}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          {initialData ? 'Atualizar' : 'Adicionar'} Recurso
        </button>
        {initialData && (
          <button
            type="button"
            className="btn-secondary"
            onClick={() => onSubmit(null)}
          >
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
};

export default ProdutoForm;