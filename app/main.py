from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import tasks

# Cria as tabelas no banco de dados
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="API de Tarefas - Claiton",
    description="Sistema de gerenciamento de tarefas com FastAPI",
    version="1.0.0"
)

# Configurar CORS (para o React funcionar depois)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir as rotas
app.include_router(tasks.router)

@app.get("/")
def root():
    return {
        "message": "API de Tarefas do Claiton está rodando! 🚀",
        "docs": "/docs",
        "version": "1.0.0"
    }