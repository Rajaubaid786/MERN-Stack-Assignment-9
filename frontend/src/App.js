import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [editingId, setEditingId] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (err) {
      console.error("Failed to load users.", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/users/${editingId}`, { name, email, age });
        setEditingId(null);
      } else {
        await axios.post('http://localhost:5000/api/users', { name, email, age });
      }
      setName(''); setEmail(''); setAge('');
      fetchUsers();
    } catch (err) {
      alert("Error saving data! (Backend server restart kiya?)");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user? 🗑️")) {
      try {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        fetchUsers();
      } catch (err) {
        alert("Error deleting user. (Backend server restart kiya?)");
      }
    }
  };

  const handleEdit = (user) => {
    setEditingId(user._id);
    setName(user.name);
    setEmail(user.email);
    setAge(user.age);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>🔥 MERN Stack Project</h1>
        <p>Complete CRUD Operations (Custom UI)</p>
      </header>

      <div className="form-card">
        <h2>{editingId ? '✏️ Edit User' : '➕ Add New User'}</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
          
          <div className="button-group">
            <button type="submit" className={editingId ? 'btn-update' : 'btn-add'}>
              {editingId ? 'Update' : 'Add User'}
            </button>
            {editingId && (
              <button type="button" className="btn-cancel" onClick={() => { setEditingId(null); setName(''); setEmail(''); setAge(''); }}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="list-card">
        <h2>Users List</h2>
        {users.length === 0 ? (
          <p className="no-data">No users found.</p>
        ) : (
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td><strong>{user.name}</strong></td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td className="actions">
                      <button className="btn-edit" onClick={() => handleEdit(user)}>Edit</button>
                      <button className="btn-delete" onClick={() => handleDelete(user._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;