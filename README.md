<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentação - Wayne Industries</title>
    <style>
        :root {
            --primary: #2c3e50;
            --secondary: #34495e;
            --accent: #3498db;
            --light: #ecf0f1;
            --dark: #2c3e50;
            --success: #2ecc71;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        
        header {
            background-color: var(--primary);
            color: white;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        h1, h2, h3 {
            color: var(--primary);
        }
        
        h1 {
            border-bottom: 3px solid var(--accent);
            padding-bottom: 10px;
        }
        
        h2 {
            margin-top: 30px;
            padding: 10px;
            background-color: var(--light);
            border-left: 4px solid var(--accent);
            border-radius: 3px;
        }
        
        .card {
            background: white;
            border-radius: 5px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .tech-badge {
            display: inline-block;
            background-color: var(--accent);
            color: white;
            padding: 3px 8px;
            border-radius: 3px;
            font-size: 0.8em;
            margin-right: 5px;
            margin-bottom: 5px;
        }
        
        pre {
            background-color: var(--secondary);
            color: var(--light);
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        
        code {
            font-family: 'Courier New', Courier, monospace;
        }
        
        .endpoint {
            background-color: #f5f5f5;
            border-left: 4px solid var(--success);
            padding: 10px 15px;
            margin: 10px 0;
            border-radius: 3px;
        }
        
        .method {
            font-weight: bold;
            color: var(--success);
        }
        
        .structure {
            font-family: monospace;
            white-space: pre;
            line-height: 1.3;
        }
        
        .note {
            background-color: #fff8e1;
            border-left: 4px solid #ffc107;
            padding: 10px 15px;
            margin: 15px 0;
        }
        
        a {
            color: var(--accent);
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <header>
        <h1>CRUD-NODE-IS-PRESMA-IWT</h1>
        <p>Documentação do projeto desenvolvido para Wayne Industries</p>
    </header>

    <section class="card">
        <h2>Visão Geral e Estrutura</h2>
        <p>Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) desenvolvida em Node.js com PostgreSQL, seguindo arquitetura MVC.</p>
        
        <h3>Estrutura do Projeto</h3>
        <div class="structure">
back_end/
├── controllers/           # Lógica de controle
│   ├── authController.js  # Autenticação
│   ├── produtoController.js # Produtos
│   └── userController.js  # Usuários
├── models/prisma/         # Modelos de dados
│   └── client.js          # Cliente Prisma
├── routes/                # Definição de rotas
│   ├── authRoutes.js      # Rotas de autenticação
│   ├── produtoRoutes.js   # Rotas de produtos
│   └── userRoutes.js      # Rotas de usuários
├── utils/                 # Utilitários
│   ├── criarAdmin.js      # Script de criação de admin
│   └── jwtUtils.js        # Manipulação de JWT
├── app.js                 # Configuração do Express
└── server.js              # Ponto de entrada
        </div>
        
        <div class="note">
            <strong>Observação:</strong> O front_end está planejado para implementação futura.
        </div>
    </section>

    <section class="card">
        <h2>Tecnologias Utilizadas</h2>
        <div>
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">Express.js</span>
            <span class="tech-badge">PostgreSQL</span>
            <span class="tech-badge">Prisma ORM</span>
            <span class="tech-badge">JWT</span>
            <span class="tech-badge">dotenv</span>
        </div>
        
        <h3>Pré-requisitos</h3>
        <ul>
            <li>Node.js ≥ v14</li>
            <li>PostgreSQL ≥ v12</li>
            <li>npm ou yarn</li>
        </ul>
        
        <h3>Instalação</h3>
        <ol>
            <li>Clone o repositório:
                <pre><code>git clone https://github.com/ALVESROMULO/wayne-industries.git</code></pre>
            </li>
            <li>Instale as dependências:
                <pre><code>cd back_end && npm install</code></pre>
            </li>
            <li>Configure o ambiente:
                <pre><code># .env
DATABASE_URL="postgresql://user:pass@localhost:5432/db?schema=public"
JWT_SECRET=sua_chave_secreta</code></pre>
            </li>
            <li>Execute as migrações:
                <pre><code>npx prisma migrate dev --name init</code></pre>
            </li>
            <li>(Opcional) Crie um usuário admin:
                <pre><code>node src/utils/criarAdmin.js</code></pre>
            </li>
        </ol>
    </section>

    <section class="card">
        <h2>Operação e Endpoints</h2>
        <p>Para iniciar a aplicação:</p>
        <pre><code>npm start</code></pre>
        <p>Servidor disponível em <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></p>
        
        <h3>Endpoints Principais</h3>
        
        <h4>Autenticação</h4>
        <div class="endpoint">
            <span class="method">POST</span> /auth/login - Login com email/senha
        </div>
        <div class="endpoint">
            <span class="method">POST</span> /auth/register - Registro de novos usuários
        </div>
        
        <h4>Usuários (requer autenticação)</h4>
        <div class="endpoint">
            <span class="method">GET</span> /users - Listagem de usuários
        </div>
        <div class="endpoint">
            <span class="method">GET</span> /users/:id - Detalhes do usuário
        </div>
        <div class="endpoint">
            <span class="method">PUT</span> /users/:id - Atualização de usuário
        </div>
        <div class="endpoint">
            <span class="method">DELETE</span> /users/:id - Remoção de usuário
        </div>
        
        <h4>Produtos</h4>
        <div class="endpoint">
            <span class="method">GET</span> /produtos - Listagem pública de produtos
        </div>
        <div class="endpoint">
            <span class="method">POST</span> /produtos - Criação de produto (requer auth)
        </div>
        <div class="endpoint">
            <span class="method">PUT</span> /produtos/:id - Atualização de produto (requer auth)
        </div>
        <div class="endpoint">
            <span class="method">DELETE</span> /produtos/:id - Remoção de produto (requer auth)
        </div>
    </section>

    <section class="card">
        <h2>Modelos de Dados</h2>
        
        <h3>Usuário (User)</h3>
        <pre><code>model User {
  id        Int      @id @default(autoincrement())
  nome      String
  email     String   @unique
  senha     String
  role      String   @default("USER")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}</code></pre>
        
        <h3>Produto</h3>
        <pre><code>model Produto {
  id          Int      @id @default(autoincrement())
  nome        String
  descricao   String?
  preco       Float
  quantidade  Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  usuarioId   Int
  usuario     User     @relation(fields: [usuarioId], references: [id])
}</code></pre>
    </section>

    <section class="card">
        <h2>Contribuição</h2>
        <ol>
            <li>Faça um fork do projeto</li>
            <li>Crie sua branch (<code>git checkout -b feature/NovaFeature</code>)</li>
            <li>Commit suas mudanças (<code>git commit -m 'Adiciona recurso'</code>)</li>
            <li>Push para a branch (<code>git push origin feature/NovaFeature</code>)</li>
            <li>Abra um Pull Request</li>
        </ol>
        
        <h3>Licença</h3>
        <p>MIT - Wayne Industries © 2025</p>
        
        <h3>Contato</h3>
        <p>Email: <a href="mailto:contato@wayneindustries.com">contato@wayneindustries.com</a></p>
        <p>Repositório: <a href="https://github.com/ALVESROMULO/wayne-industries" target="_blank">github.com/ALVESROMULO/wayne-industries</a></p>
    </section>
</body>
</html>

