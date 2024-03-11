import React, { useState } from 'react';
import '/src/assets/css/register.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '/src/assets/css/images/logo2.png';
import { register } from "../../services/auth";

const Register = () => {
    const nav = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            toast.warn("Please enter email and password");
            return;
        }
        if (mobileNumber.trim().length !== 10) {
            toast.warn("Mobile number should be 10 digits long");
            return;
        }

        const data = {
            name: name,
            email: email,
            password: password,
            mobilenumber: mobileNumber,
            role: "ADMIN"
        };

        await register(data)
            .then(() => {
                console.log("success");
                toast.success("Register Successfully");
                nav("/routeTo/login");      
            })
            .catch((err) => {
                console.error(err);
                if (err.response && err.response.data) {
                    const errorMessage = err.response.data.message;
                    if (errorMessage.includes("Email")) {
                        toast.warn("Email already exists");
                    } else if (errorMessage.includes("Mobile number")) {
                        toast.warn("Mobile number already exists");
                    }
                }
            });
    };

    const handleSignInClick = () => {
        nav("/routeTo/login");
    };

    return (
        <div className="wrapperRegister">
            <nav className="navRegister">
                <div className="nav-logoRegister">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="nav-buttonRegister">
                    <button className="btnRegister" id="RregisterBtn" style={{ marginLeft: "280px" }} onClick={handleSignInClick}>Sign In</button>
                    <button className="btnRegister white-btnRegister" style={{ marginLeft: "30px" }} id="RloginBtn">Sign Up</button>
                </div>
            </nav>
            <form onSubmit={handleSubmit}>
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
                            <button type="submit" required className="submitRegister">Sign Up</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;

