import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainlogo from "../../../Assets/Corel.png";
import "./Main.css";
import Preview from '../../../Components/Preview';

const Main = ({ addOrder }) => {

  const [showModal, setShowModal] = useState(false);
  const [pdtname, setPdtname] = useState('');
  const [size, setSize] = useState('');
  const [image, setImage] = useState("");
  const[uid,setUid]=useState(0)
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      setTimeout(() => navigate("/"), 2000);
    }
  }, [user, navigate]);

  if (!user) {
    return <h2>Please login first.</h2>;
  }

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const createOrder = () => {
    if (!pdtname.trim() || !size.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newId = uid + 1;
    setUid(newId);

    const newOrder = {
      id: newId,
      name: pdtname,
      size: size,
      image:image,
      assignedTo:"",
      status: "new"
    };

    
    addOrder(newOrder);

    
    setPdtname("");
    setSize("");

    setShowModal(false);
  };

  return (
    <>
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
          <button className="menu-btn" onClick={() => setShowModal(true)}>New Order</button>
          {/* <button className="menu-btn">Employees</button> */}
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </div>

      
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>

            <h2>Create a new Order</h2>
            <button className="close-btn" onClick={() => setShowModal(false)}>X</button>

            <div className="form-group">
              <label>Product Name</label>
              <input type="text"
                value={pdtname}
                onChange={(e) => setPdtname(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Size</label>
              <input type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Upload the Image</label>
              <Preview onImageSelect={(img) => setImage(img)}  />
            </div>

            <button className="create-btn" onClick={createOrder}>Create</button>

          </div>
        </div>
      )}

       

  

        
      


    </>
  );
};

export default Main;
