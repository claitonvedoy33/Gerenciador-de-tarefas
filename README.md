# 🚀 Sistema de Gerenciamento de Tarefas

Sistema full stack completo para gerenciamento de tarefas, desenvolvido com FastAPI, React e PostgreSQL.

![Python](https://img.shields.io/badge/Python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.109-green)
![React](https://img.shields.io/badge/React-18-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)

## 🎯 Funcionalidades

- ✅ Criar tarefas com título e descrição
- ✅ Listar todas as tarefas
- ✅ Marcar tarefas como completas/incompletas
- ✅ Deletar tarefas
- ✅ Interface responsiva e moderna
- ✅ API REST documentada automaticamente
- ✅ Validação de dados com Pydantic

## 🛠️ Tecnologias Utilizadas

### Backend
- **FastAPI** - Framework web moderno e rápido
- **SQLAlchemy** - ORM para Python
- **PostgreSQL** - Banco de dados relacional
- **Pydantic** - Validação de dados
- **Uvicorn** - Servidor ASGI

### Frontend
- **React** - Biblioteca JavaScript para interfaces
- **Axios** - Cliente HTTP
- **CSS3** - Estilização moderna

## 📦 Instalação e Execução

### Pré-requisitos

- Python 3.11+
- Node.js 18+
- PostgreSQL 15+

### Backend
```bash
# Clonar repositório
git clone https://github.com/seu-usuario/sistema-tarefas.git
cd sistema-tarefas

# Criar ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# Instalar dependências
pip install -r requirements.txt

# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas credenciais do PostgreSQL

# Criar banco de dados
# No PostgreSQL:
CREATE DATABASE sistema_claiton;
CREATE USER claiton WITH PASSWORD 'sua_senha';
GRANT ALL PRIVILEGES ON DATABASE sistema_claiton TO claiton;

# Rodar aplicação
uvicorn app.main:app --reload
```

Acesse: http://127.0.0.1:8000/docs

### Frontend
```bash
# Em outro terminal
cd frontend

# Instalar dependências
npm install

# Rodar aplicação
npm start
```

Acesse: http://localhost:3000

## 📚 Documentação da API

A documentação interativa da API está disponível em `/docs` quando o servidor está rodando.

### Endpoints Principais

- `GET /` - Página inicial
- `POST /tasks/` - Criar nova tarefa
- `GET /tasks/` - Listar todas as tarefas
- `GET /tasks/{id}` - Buscar tarefa por ID
- `PUT /tasks/{id}` - Atualizar tarefa
- `DELETE /tasks/{id}` - Deletar tarefa

## 🗄️ Estrutura do Banco de Dados

### Tabela: tasks

| Campo       | Tipo      | Descrição                    |
|-------------|-----------|------------------------------|
| id          | Integer   | ID único (chave primária)    |
| title       | String    | Título da tarefa             |
| description | String    | Descrição (opcional)         |
| completed   | Boolean   | Status de conclusão          |
| created_at  | DateTime  | Data de criação              |

## 📁 Estrutura do Projeto
```
sistema-tarefas/
├── app/
│   ├── __init__.py
│   ├── main.py           # Aplicação principal
│   ├── database.py       # Configuração do banco
│   ├── models.py         # Modelos SQLAlchemy
│   ├── schemas.py        # Schemas Pydantic
│   └── routers/
│       ├── __init__.py
│       └── tasks.py      # Rotas de tarefas
├── frontend/
│   ├── src/
│   │   ├── App.js        # Componente principal
│   │   └── App.css       # Estilos
│   ├── public/
│   └── package.json
├── venv/
├── .env
├── .gitignore
├── requirements.txt
└── README.md
```

## 🚀 Deploy

### Backend (Railway/Render)

1. Crie uma conta em Railway.app ou Render.com
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente
4. Deploy automático!

### Frontend (Vercel/Netlify)

1. Crie uma conta em Vercel.com ou Netlify.com
2. Conecte seu repositório GitHub
3. Configure build: `npm run build`
4. Pasta de deploy: `build/`
5. Deploy automático!

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

**Claiton**

- GitHub: [@claitonvedoy33](https://github.com/seu-usuario)
- LinkedIn: [claiton vedoy](https://linkedin.com/in/seu-perfil)

---

⭐ Se este projeto te ajudou, deixe uma estrela!