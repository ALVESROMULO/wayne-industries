# Wayne Industries

## 📌 Visão Geral
API CRUD (Create, Read, Update, Delete) desenvolvida em Node.js com PostgreSQL, seguindo arquitetura MVC para gerenciamento de usuários e produtos.

├── back_end/<BR>
│   ├── controllers/          # Lógica de controle<BR>
│   │   ├── authController.js<BR>
│   │   ├── produtoController.js<BR>
│   │   └── userController.js<BR>
│   ├── models/prisma/        # Modelos de dados<BR>
│   │   └── client.js<BR>
│   ├── routes/               # Definição de rotas<BR>
│   │   ├── authRoutes.js<BR>
│   │   ├── produtoRoutes.js<BR>
│   │   └── userRoutes.js<BR>
│   ├── utils/                # Utilitários<BR>
│   │   ├── criarAdmin.js<BR>
│   │   └── jwtUtils.js<BR>
│   ├── app.js                # Config Express<BR>
│   └── server.js             # Ponto de entrada<BR>
└── front_end/                # (A implementar)<BR>

## 🛠 Tecnologias

![image](https://github.com/user-attachments/assets/ee6cda73-9caa-4245-a736-35e044011428)<BR>
![image](https://github.com/user-attachments/assets/3538df6a-974e-4201-902f-4e4941850fc5)<BR>
![image](https://github.com/user-attachments/assets/34287aa5-d883-4ee6-891c-2bf97a43310a)<BR>
![image](https://github.com/user-attachments/assets/320ef808-9616-4bcd-a966-7aa59f3dc093)<BR>
![image](https://github.com/user-attachments/assets/6a9d610c-71ef-40ee-8791-de0b887c13b9)<BR>

## ⚙️ Configuração

Pré-requisitos

Node.js 14+<br>
PostgreSQL 12+<br>
npm ou yarn<br>

## Instalação

## 1. Clone o repositório:

git clone https://github.com/ALVESROMULO/wayne-industries.git<br>
cd wayne-industries/back_end

## 2. Instale as dependências:

npm install

## 3. Configure o ambiente:

DATABASE_URL="postgresql://user:pass@localhost:5432/db?schema=public"<br>
JWT_SECRET=sua_chave_secreta

## 4. Execute as migrações:

npx prisma migrate dev --name init

## 5. (Opcional) Crie um admin:

node src/utils/criarAdmin.js

# 🚀 Execução

npm start<br>

A API estará disponível em: http://localhost:3000

# 🔍 Endpoints

## 🔐 Autenticação

Método	Endpoint	Descrição<br>
POST	/auth/login	Login com email/senha<br>
POST	/auth/register	Registro de usuários<br>

## 👥 Usuários (requer autenticação)

Método	Endpoint	Descrição<br>
GET	/users	Listar todos<br>
GET	/users/:id	Obter por ID<br>
PUT	/users/:id	Atualizar usuário<br>
DELETE	/users/:id	Remover usuário<br>

## 🛍️ Produtos

Método	Endpoint	Descrição<br>
GET	/produtos	Listagem pública<br>
POST	/produtos	Criar (requer autenticação)<br>
PUT	/produtos/:id	Atualizar (requer auth)<br>
DELETE	/produtos/:id	Remover (requer auth)<br>

## 🗃️ Modelos de Dados

Usuário (User)

model User {<br>
  id        Int      @id @default(autoincrement())<br>
  nome      String<br>
  email     String   @unique<br>
  senha     String<br>
  role      String   @default("USER")<br>
  createdAt DateTime @default(now())<br>
  updatedAt DateTime @updatedAt<br>
}<br>

Produto

model Produto {<br>
  id          Int      @id @default(autoincrement())<br>
  nome        String<br>
  descricao   String?<br>
  preco       Float<br>
  quantidade  Int      @default(0)<br>
  createdAt   DateTime @default(now())<br>
  updatedAt   DateTime @updatedAt<br>
  usuarioId   Int<br>
  usuario     User     @relation(fields: [usuarioId], references: [id])<br>
}<br>

## 🤝 Contribuição

1. Faça um fork do projeto

2. Crie sua branch (git checkout -b feature/nova-feature)

3. Commit suas mudanças (git commit -m 'Adiciona nova feature')

4. Push para a branch (git push origin feature/nova-feature)

5. Abra um Pull Request

## 📜 Licença

MIT License - © 2025 Wayne Industries

## 📧 Contato

Email: contato@wayneindustries.com<br>
Repositório: github.com/ALVESROMULO/wayne-industries<br>
<div align="center"> <sub>Criado por Wayne Industries</sub> </div>

