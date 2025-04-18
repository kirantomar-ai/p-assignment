import React from "react";

export default function ProductCard({ product, isSelected, onToggle }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggle(product)}
        />
        Compare
      </label>
    </div>
  );
}
