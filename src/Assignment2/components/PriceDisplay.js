import React from "react";

export default function PriceDisplay({ price }) {
  return (
    <div className="price-display">
      <strong>Total:</strong> ₹{price}
    </div>
  );
}
