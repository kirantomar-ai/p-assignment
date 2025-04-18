import React from "react";

export default function QuantitySelector({ quantity, setQuantity }) {
  const increment = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="selector">
      <label>Quantity:</label>
      <div className="quantity-control">
        <button onClick={decrement}>−</button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
