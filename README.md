# API REST de Livros

API REST desenvolvida com Node.js e Express para gerenciamento de livros.

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

## 📝 Publicar no GitHub

### Passos já concluídos:
1. ✅ Repositório Git inicializado
2. ✅ Arquivos adicionados ao staging
3. ✅ Primeiro commit criado

### Próximos passos:

#### 1. Criar repositório no GitHub

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `lib_dev_backend` (ou o nome que preferir)
   - **Description**: "API REST de livros com Node.js e Express"
   - **Visibility**: Escolha **Public** ou **Private**
   - ⚠️ **NÃO marque** "Add a README file", "Add .gitignore" ou "Choose a license" (já temos esses arquivos)
5. Clique em **"Create repository"**

#### 2. Conectar repositório local ao remoto

Após criar o repositório no GitHub, use o comando abaixo (substitua `SEU_USUARIO` pelo seu username do GitHub):

```bash
git remote add origin https://github.com/SEU_USUARIO/lib_dev_backend.git
```

**OU se preferir usar SSH:**

```bash
git remote add origin git@github.com:SEU_USUARIO/lib_dev_backend.git
```

#### 3. Renomear branch para 'main' (opcional, mas recomendado)

```bash
git branch -M main
```

#### 4. Fazer push para o GitHub

```bash
git push -u origin main
```

(Se você não renomeou a branch, use `master` em vez de `main`)

#### 5. Verificar

Acesse seu repositório no GitHub e confirme que todos os arquivos foram enviados corretamente.

## 🔧 Comandos Git úteis

- **Ver status**: `git status`
- **Adicionar arquivos**: `git add .`
- **Fazer commit**: `git commit -m "Sua mensagem"`
- **Enviar para GitHub**: `git push`
- **Ver commits**: `git log`

## ⚠️ Nota sobre autenticação

Se for solicitada autenticação ao fazer push:
- **HTTPS**: Use um Personal Access Token (não sua senha)
- **SSH**: Configure suas chaves SSH no GitHub

Para criar um Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Selecione as permissões necessárias (pelo menos `repo`)
4. Use o token como senha ao fazer push

## 👤 Autor

João Pedro A. Hypólito

