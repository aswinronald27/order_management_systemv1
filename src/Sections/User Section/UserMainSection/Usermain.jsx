import React from 'react'
import { useNavigate } from 'react-router-dom';
import mainlogo from "../../../Assets/Corel.png";

const Usermain = () => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div>
        <div className="main-container">

        <div className="left-section">
          <img
            src={mainlogo}
            onClick={() => navigate(0)}
            style={{ cursor: "pointer" }}
            alt="Main Logo"
            height={45}
          />
        </div>

        <div className="center-section">
          <h3>Welcome, {user.name}</h3>
        </div>

        <div className="right-section">
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Usermain