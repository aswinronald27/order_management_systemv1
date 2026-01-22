import React, { useState } from "react";
import Cards from "../../../../Components/Cards";
import OrderModal from "../../../../Components/OrderModal";

const Onprogress = ({ orders, updateOrder }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = (id) => {
    const order = orders.find((o) => o.id === id);
    setSelectedOrder(order);
  };

  const closeModal = () => setSelectedOrder(null);

  return (
    <div>
      {orders.length === 0 && <p>No orders in progress.</p>}

      {orders.map((order) => (
        <Cards
          key={order.id}
          pdtname={order.name}
          size={order.size}
          orderId={order.id}
          image={order.image}
          assignedTo={order.assignedTo}
          onCardClick={() => openModal(order.id)}   // ✅ FIX
        />
      ))}

      {selectedOrder && (
        <OrderModal
          order={selectedOrder}
          updateOrder={updateOrder}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Onprogress;
