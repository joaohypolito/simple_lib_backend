# API REST de Livros

API REST desenvolvida com Node.js e Express para gerenciamento de livros, seguindo o curso da Alura "Node.js: continue seu projeto full stack criando uma API com Express" da Carreira Desenvolvimento Full-Stack com Node.js

## 🚀 Tecnologias

- Node.js
- Express
- ES Modules

## 📋 Funcionalidades

- ✅ Listar todos os livros (GET `/books`)
- ✅ Buscar livro por ID (GET `/books/:id`)
- ✅ Criar novo livro (POST `/books/new`)
- ✅ Editar livro (PATCH `/books/edit/:id`)
- ✅ Deletar livro (DELETE `/books/:id`)

## 🛠️ Instalação

```bash
npm install
```

## ▶️ Executar

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:8000`

## 📁 Estrutura do Projeto

```
lib_dev_backend/
├── app.js              # Configuração do Express
├── routes/
│   └── book.js         # Rotas dos livros
├── controllers/
│   └── book.js         # Lógica de controle
├── services/
│   └── book.js         # Lógica de negócio e acesso a dados
└── books.json          # Banco de dados (JSON)
```

## 👤 Autor

João Pedro A. Hypólito

