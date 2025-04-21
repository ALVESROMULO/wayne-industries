const ProdutoList = ({ produtos, onEdit, onDelete, currentUserId }) => {
    return (
      <div className="product-list">
        <h2>Lista de Recursos</h2>
        {produtos.length === 0 ? (
          <p>Nenhum recurso encontrado</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descricao</th>
                <th>Preco</th>
                <th>Quantidade</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.nome}</td>
                  <td>{produto.descricao || '-'}</td>
                  <td>${produto.preco.toFixed(2)}</td>
                  <td>{produto.quantidade}</td>
                  <td>
                    <button
                      onClick={() => onEdit(produto)}
                      className="btn-edit"
                    >
                      Edit
                    </button>
                    {(produto.userId === currentUserId || produto.user?.funcao === 'admin') && (
                      <button
                        onClick={() => onDelete(produto.id)}
                        className="btn-delete"
                      >
                        Deletar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };
  
  export default ProdutoList;