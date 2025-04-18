import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, selected, onToggleProduct }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSelected={selected.includes(product)}
          onToggle={onToggleProduct}
        />
      ))}
    </div>
  );
}
