import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/assets/css/login.css';
import logo from '/src/assets/css/images/logo2.png';

function Login() {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleclick = (e) => {
        e.preventDefault();
        nav("/routeTo/sign")
    }
    const handleLogin = (e) => {
        e.preventDefault();
        if (validateForm()) {
            nav("/user/home");
        }
    }

    const validateForm = () => {
        if (!email.trim()) {
            setError('Please enter your email');
            return false;
        }
        if (!password.trim()) {
            setError('Please enter your password');
            return false;
        }
        return true;
    }

    const handleForgotPassword = (e) => {
        e.preventDefault();
        nav("/forgotpassword");
    }

    return (
        <div className="wrapper">
            <nav className="nav">
                <div className="nav-logo ">
                    <img src={logo} alt="Logo" style={{ marginLeft: '-31px' }} />
                </div>
                <div className="nav-button">
                    <button className="btn white-btn" id="loginBtn" style={{ marginLeft: '330px' }}>Sign In</button>
                    <button className="btn" id="SregisterBtn" onClick={handleclick}>Sign Up</button>
                </div>
            </nav>
            <form onSubmit={handleLogin}>
                <div className="form-box">
                    <div className="login-container">
                        <div className="top">
                            <header>Login</header>
                        </div>
                        <div className="input-box">
                            <input type="email" required className="input-field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <input type="password" required className="input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <input type="submit" className="submit" value="Sign In" />
                        </div>
                    </div>
                    <div className='forget-passwordlogin'>
                        <a href="#" onClick={handleForgotPassword}>Forgot password?</a>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                </div>
            </form>
        </div>
    );
}

export default Login;

    