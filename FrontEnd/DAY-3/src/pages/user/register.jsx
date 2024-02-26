import React, { useState } from 'react';
import '/src/assets/css/register.css';
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/css/images/logo2.png';

function Register() {
    const nav = useNavigate();
    const [activeRole, setActiveRole] = useState('student'); // State to track active role
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');

    const handleSignInClick = () => {
        nav("/routeTo/login");
    };

    const handleRoleClick = (role) => {
        setActiveRole(role);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (validateForm()) {   
            nav("/routeTo/login");
        }
    };

    const validateForm = () => {
        if (!name.trim()) {
            setError('Please enter your name');
            return false;
        }
        if (!email.trim()) {
            setError('Please enter your email');
            return false;
        }
        if (!password.trim()) {
            setError('Please enter your password');
            return false;
        }
        if (!mobileNumber.trim()) {
            setError('Please enter your mobile number');
            return false;
        }
        return true;
    };

    return (
        <div className="wrapperRegister">
            <nav className="navRegister">
                <div className="nav-logoRegister ">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="nav-buttonRegister">
                    <div className="role-buttons">
                        <button
                            className={`btnRegister ${activeRole === 'student' ? 'active' : ''}`}
                            onClick={() => handleRoleClick('student')} style={{marginLeft:"-350px"}}
                        >
                            Student
                        </button>
                        <button
                            className={`btnRegister ${activeRole === 'teacher' ? 'active' : ''}`}
                            onClick={() => handleRoleClick('teacher')} style={{marginLeft:"45px"}}
                        >
                            Teacher
                        </button>
                    </div>
                    <button className="btnRegister" id="RregisterBtn" style={{ marginLeft: "280px" }} onClick={handleSignInClick}>Sign In</button>
                    <button className="btnRegister white-btnRegister" style={{ marginLeft: "30px" }} id="RloginBtn">Sign Up</button>
                </div>
            </nav>
            <form onSubmit={handleRegister}>
                <div className="form-boxRegister">
                    <div className="login-containerRegister">
                        <div className="topRegister">
                            <header>Register</header>
                        </div>
                        <div className="input-boxRegister">
                            <input type="text" required className="input-fieldRegister" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="input-boxRegister">
                            <input type="email" required className="input-fieldRegister" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-boxRegister">
                            <input type="password" required className="input-fieldRegister" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-boxRegister">
                            <input type="number" required className="input-fieldRegister" placeholder="Mobile number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                        </div>
                        <div className="input-boxRegister">
                            <input type="submit" required className="submitRegister" value="Sign Up" />
                        </div>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                </div>
            </form>
        </div>
    );
}

export default Register;
