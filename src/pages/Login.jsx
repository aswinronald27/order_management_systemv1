import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../Assets/Logo.png";
import "../Styles/Login.css";

const Login = (backuplogin) => {
  const navigate = useNavigate();

  const logins = [
    { name: 'User', email: '2', password: '2', role: 'user' },
    { name: 'Admin', email: '1', password: '1', role: 'admin' },
    { name: 'Aswin', email: 'aswin@mail.com', password: '123', role: 'admin' },
    { name: 'Daren', email: 'daren@mail.com', password: '123', role: 'user' }
    
  ];
  
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState({});

  const validate = () => {
    const newError = {};
    const user = logins.find(
      (u) => u.email === name && u.password === pass
    );
    
    if (!name.trim() || !pass.trim()) {
      setError({ message: "Please fill all fields" });
      return;
    }
    // if user exists
    if (!user) {
      console.log("Invalid Username or Password");
      newError.message = "Invalid Username or Password";
    }
    setError({});

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }
    console.log("Login Success");
    localStorage.setItem("user", JSON.stringify(user));
    
  // based on role
    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <>
    <div className="login-page">
      <div className="login-container">
        <img src={logo} alt="" height={100} />
        <h1>Login</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
        />
        <div className="error-box">
          {error.message && <p className="error-text">{error.message}</p>}
        </div>
        <button onClick={validate}>Login</button>
      </div>
    </div>
      
      
    </>
  );
};

export default Login;
