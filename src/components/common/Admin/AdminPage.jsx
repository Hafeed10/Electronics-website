import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

function AdminPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === 'powersaff@gmail.com' && password === '12345') {
            localStorage.setItem('isAuthenticated', 'true'); // save login state
            navigate('/dashboard');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="admin-container">
            <div className="admin-card">
                <h2>Login</h2>
                <div className="form-section">
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button className="admin-button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default AdminPage;
