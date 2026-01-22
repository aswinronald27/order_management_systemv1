import React from 'react'
import Cards from "../../../../Components/Cards";

const Completed = ({ orders, updateOrder }) => {
  return (
    <div>
      {orders.map(order => (
        <Cards
          key={order.id}
          pdtname={order.name}
          size={order.size}
          orderId={order.id}
          image={order.image}
          onCardClick={() => console.log("Clicked:", order.id)}
        />
      ))}
    </div>
  );
};


export default Completed