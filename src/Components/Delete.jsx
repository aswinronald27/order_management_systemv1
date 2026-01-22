import React from "react";
import "./Delete.css";

const Delete = ({ clearAllOrders }) => {
  return (
    <button className="delete-all-btn" onClick={clearAllOrders}>
      Delete All Orders
    </button>
  );
};

export default Delete;
