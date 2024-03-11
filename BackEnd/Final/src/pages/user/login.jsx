// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '/src/assets/css/login.css';
// import logo from '/src/assets/css/images/logo2.png';
// import { login } from "../../services/auth";
// import { jwtDecode } from "jwt-decode";
// import { toast } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css';


// const Login=() =>{
//     const nav = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleclick = (e) => {
//         e.preventDefault();
//         nav("/routeTo/sign")
//     }
//     // const handleLogin = (e) => {
//     //     e.preventDefault();
//     //     if (validateForm()) {
//     //         nav("/user/home");
//     //     }
//     // }

//     const validateForm = () => {
//         if (!email.trim()) {
//             setError('Please enter your email');
//             return false;
//         }
//         if (!password.trim()) {
//             setError('Please enter your password');
//             return false;
//         }
//         return true;
//     }

//     const handleForgotPassword = (e) => {
//         e.preventDefault();
//         nav("/forgotpassword");
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         if (email.trim() === "" || password.trim() === "") {
//           toast.warn("Please enter email and password");
//           return;
//         }
    
//         const data = {
//           email: email,
//           password: password,
//         };
//         console.log(data);
    
//         await login(data)
//           .then((res) => {
//             console.log(res?.data?.access_token);
//             const decode = jwtDecode(res?.data?.access_token);
//             sessionStorage.setItem("token", JSON.stringify(decode));
//             console.log(decode);
//             toast.success("Login Successfully");
//             nav('/user/home');
//           })
//           .catch((err) => {
//             toast.error("Invalid Credentials");
//           });
//       };
    
    

//     return (
//         <div className="wrapper">
//             <nav className="nav">
//                 <div className="nav-logo ">
//                     <img src={logo} alt="Logo" style={{ marginLeft: '-31px' }} />
//                 </div>
//                 <div className="nav-button">
//                     <button className="btn white-btn" id="loginBtn" style={{ marginLeft: '330px' }}>Sign In</button>
//                     <button className="btn" id="SregisterBtn" onClick={handleclick}>Sign Up</button>
//                 </div>
//             </nav>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-box">
//                     <div className="login-container">
//                         <div className="top">
//                             <header>Login</header>
//                         </div>
//                         <div className="input-box">
//                             <input type="email" required className="input-field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                         </div>
//                         <div className="input-box">
//                             <input type="password" required className="input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         </div>
//                         <div className="input-box">
//                             <button type="submit" className="submit"  >Sign In</button>
//                         </div>
//                     </div>
//                     <div className='forget-passwordlogin'>
//                         <a href="#" onClick={handleForgotPassword}>Forgot password?</a>
//                     </div>
//                     {error && <div className="error-message">{error}</div>}
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/assets/css/login.css';
import logo from '/src/assets/css/images/logo2.png';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { login, fetchUserDetails } from "../../services/auth"; 
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginSuccess, setUserData } from "../../redux/authSlice";

const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleclick = (e) => {
        e.preventDefault();
        nav("/routeTo/sign")
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

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (email.trim() === "" || password.trim() === "") {
          toast.warn("Please enter email and password");
          return;
        }
    
        const data = {
          email: email,
          password: password,
        };
    
        try {
          const response = await login(data);
          const token = response?.data?.access_token;
    
        //   if (token) {
            sessionStorage.setItem("token", token);
            const decode = jwtDecode(token);
            console.log(decode);
            dispatch(loginSuccess({ ...decode, email: email }));

            const userDetailsResponse = await fetchUserDetails(email);
            if (!userDetailsResponse) {
                throw new Error("User details not found");
              }
          
              // Dispatch user details to Redux store
              dispatch(setUserData(userDetailsResponse));
  
            toast.success("Login Successfully");
            nav('/user/home');
        //   } else {
            // toast.error("Invalid token received");
        //   }  
        } catch (error) {
            if(error.response && error.response.status===417){

                toast.error("Invalid Credentials");
            }
            else{
                toast.error("Login failed");
            }
        }
      };
     
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
            <form onSubmit={handleSubmit}>
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
                            <button type="submit" className="submit"  >Sign In</button>
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
