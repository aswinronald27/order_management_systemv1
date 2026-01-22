import React, { useState } from 'react'
import Main from '../Sections/AdminSection/MainSection/Main'
import Orderpage from '../Sections/AdminSection/TabSection/Orderpage'

const AdminDashboard = () => {

  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });

  const addOrder = (order) => {
    const updated = [...orders, order];
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };
  
  const clearAllOrders = () => {
  setOrders([]);
  localStorage.removeItem("orders");
};
const updateOrder = (updatedOrder) => {
  const newList = orders.map(o => 
    o.id === updatedOrder.id ? updatedOrder : o
  );
  setOrders(newList);
  localStorage.setItem("orders", JSON.stringify(newList));
};
  return (
    <>
      <Main addOrder={addOrder} />
      <Orderpage 
         orders={orders} 
        clearAllOrders={clearAllOrders}
        updateOrder={updateOrder}/>
        <button onClick={clearAllOrders}>Clear Everything</button>
        
    </>
  )
}

export default AdminDashboard
