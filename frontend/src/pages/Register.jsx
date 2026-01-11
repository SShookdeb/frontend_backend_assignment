import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    try {
      const res = await API.post('/auth/register', { name, email, password });
      console.log("REGISTER SUCCESS:", res.data);
      alert('Registration successful. Please login.');
      navigate('/');
    } catch (err) {
      console.error("REGISTER ERROR:", err.response?.data || err.message);
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
  <div className="register-container">
    <div className="register-card">

      <h2 className="register-title">📝 Register</h2>

      {error && <p className="register-error">{error}</p>}

      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="register-input"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
        />

        <button type="submit" className="register-btn">
          Create Account
        </button>
      </form>

      <p className="register-footer">
        Already have an account? <span onClick={() => navigate('/')}>Login</span>
      </p>

    </div>
  </div>
);

};

export default Register;
