import { useEffect, useState } from 'react';
import API from '../services/api';

const Dashboard = () => {
  const [profile, setProfile] = useState({});
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchProfile = async () => {
    const res = await API.get('/user/profile');
    setProfile(res.data);
  };

  const fetchTasks = async () => {
    const res = await API.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchProfile();
    fetchTasks();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await API.post('/tasks', { title, description });
    setTitle('');
    setDescription('');
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
  <div className="page-center">
    <div className="dashboard">

      <div className="top-bar">
        <h1 className="title">🚀 Dashboard</h1>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>

      <div className="card">
        <h3 className="section-title">👤 Profile</h3>
        <p className="profile-text">Name: {profile.name}</p>
        <p className="profile-text">Email: {profile.email}</p>
      </div>

      <div className="card">
        <h3 className="section-title">➕ Add Task</h3>
        <form onSubmit={handleAdd}>
          <input
            className="input"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input"
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn">Add Task</button>
        </form>
      </div>

      <div className="card">
        <h3 className="section-title">🎯 Your Tasks</h3>

        {tasks.length === 0 && <p>No tasks yet</p>}

        {tasks.map(task => (
          <div key={task._id} className="task">
            <p><strong>{task.title}</strong></p>
            <p>{task.description}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  </div>
);

};

export default Dashboard;
