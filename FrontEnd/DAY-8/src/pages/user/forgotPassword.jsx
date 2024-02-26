import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/assets/css/forgetpassword.css';
import logo from '/src/assets/css/images/logo2.png';

function Login() {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const[confirmpassword,setConfirmPassword] = useState('');

    const handleclick = (e) => {
        e.preventDefault();
        nav("/routeTo/sign")
    }
    const handleLogin = (e) => {
        e.preventDefault();
        if (validateForm()) {
            nav("/routeTo/login");
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
        if(!confirmpassword.trimEnd()){
            setError('please enter your confirm password');
            return false;
        }
        return true;
    }

    const handleForgotPassword = (e) => {
        e.preventDefault();
        // Logic to handle forgot password, e.g., redirect to forgot password page
        // nav("/forgotpassword");
    }

    return (
        <div className="wrapperpassword">
            <nav className="navpassword">
                <div className="nav-logopassword ">
                    <img src={logo} alt="Logo" style={{ marginLeft: '-31px' }} />
                </div>
                <div className="nav-buttonpassword">
                    <button className="btn white-btnpassword" id="loginBtn" style={{ marginLeft: '330px' }}>Sign In</button>
                    <button className="btn" id="SregisterBtn" onClick={handleclick}>Sign Up</button>
                </div>
            </nav>
            <form onSubmit={handleLogin}>
                <div className="form-boxpassword">
                    <div className="login-containerpassword">
                        <div className="toppassword">
                            <header>ForgetPassword</header>
                        </div>
                        <div className="input-boxpassword">
                            <input type="email" required className="input-fieldpassword" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-boxpassword">
                            <input type="password" required className="input-fieldpassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-boxpassword">
                            <input type="password" required className="input-fieldpassword" placeholder="Confirmpassword" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className="input-boxpassword">
                            <input type="submit" className="submitpassword" value="Reset Password" />
                        </div>
                    </div>
                    
                    {error && <div className="error-messagepassword">{error}</div>}
                </div>
            </form>
        </div>
    );
}

export default Login;

    