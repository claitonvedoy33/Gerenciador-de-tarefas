import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:8000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Buscar tarefas ao carregar
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/tasks/`);
      setTasks(response.data);
      setError('');
    } catch (err) {
      setError('Erro ao carregar tarefas. Verifique se o backend está rodando!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) {
      alert('O título é obrigatório!');
      return;
    }

    try {
      await axios.post(`${API_URL}/tasks/`, newTask);
      setNewTask({ title: '', description: '' });
      fetchTasks();
    } catch (err) {
      setError('Erro ao adicionar tarefa');
      console.error(err);
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      await axios.put(`${API_URL}/tasks/${id}`, { completed: !completed });
      fetchTasks();
    } catch (err) {
      setError('Erro ao atualizar tarefa');
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar esta tarefa?')) {
      try {
        await axios.delete(`${API_URL}/tasks/${id}`);
        fetchTasks();
      } catch (err) {
        setError('Erro ao deletar tarefa');
        console.error(err);
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>📝 Gerenciador de Tarefas</h1>
        <p className="subtitle">FastAPI + React + PostgreSQL</p>

        {error && <div className="error">{error}</div>}

        {/* Formulário */}
        <form onSubmit={addTask} className="task-form">
          <input
            type="text"
            placeholder="Título da tarefa *"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="input"
          />
          <input
            type="text"
            placeholder="Descrição (opcional)"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="input"
          />
          <button type="submit" className="btn-add">
            ➕ Adicionar Tarefa
          </button>
        </form>

        {/* Loading */}
        {loading && <p className="loading">Carregando...</p>}

        {/* Lista de Tarefas */}
        <div className="tasks-list">
          {tasks.length === 0 && !loading && (
            <p className="empty">Nenhuma tarefa cadastrada. Adicione uma acima! 👆</p>
          )}

          {tasks.map((task) => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id, task.completed)}
                  className="checkbox"
                />
                <div className="task-text">
                  <h3>{task.title}</h3>
                  {task.description && <p>{task.description}</p>}
                  <span className="date">
                    Criada em: {new Date(task.created_at).toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="btn-delete"
                title="Deletar tarefa"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <footer className="footer">
          <p>
            Total de tarefas: <strong>{tasks.length}</strong> | 
            Completas: <strong>{tasks.filter(t => t.completed).length}</strong> | 
            Pendentes: <strong>{tasks.filter(t => !t.completed).length}</strong>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
