import React, { useState } from "react";
import "./Ordermodal.css";

const OrderModal = ({ order, updateOrder, closeModal }) => {
  const [assignedTo, setAssignedTo] = useState(order.assignedTo);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = order.image;
    link.download = `${order.name}.png`;
    link.click();
  };

  const handleAssign = () => {
    const updated = {
      ...order,
      assignedTo,
      status: "progress",
    };

    updateOrder(updated);
    closeModal();
  };
console.log("updateOrder received:", updateOrder);

  return (
    <div className="om-overlay" onClick={closeModal}>
      <div className="om-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="om-close" onClick={closeModal}>×</button>

        <h2 className="om-title">Order Details</h2>

        {/* Image Preview */}
        {order.image && (
          <img src={order.image} alt="preview" className="om-preview" />
        )}

        {/* Order Info */}
        <div className="om-info">
          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Size:</strong> {order.size}</p>
          <p><strong>Order ID:</strong> {order.id}</p>
        </div>

        {/* Download Button */}
        <button className="om-download" onClick={downloadImage}>
          ⬇ Download Image
        </button>

        <button className="om-upload">
          ⬆ Upload Image
        </button>


        {/* Assign Section */}
        <h3 className="om-subtitle">Assign This Order</h3>

        <select 
          className="om-select"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        >
          <option value="">Select Employee</option>
          <option value="Aswin">Aswin</option>
          <option value="Demo">Demo</option>
          <option value="Daren">Daren</option>
        </select>

        <button className="om-assign" onClick={handleAssign}>
          Assign Order
        </button>

      </div>
    </div>
  );
};

export default OrderModal;
