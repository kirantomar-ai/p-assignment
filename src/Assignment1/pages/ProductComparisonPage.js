import React, { useState } from "react";
import ProductList from "../components/ProductList";
import ComparisonModal from "../components/ComparisonModal";
import products from "../data/products_list";

export default function ProductComparisonPage() {
  const [selected, setSelected] = useState([]);
  const [warning, setWarning] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toggleProduct = (product) => {
    if (selected.includes(product)) {
      setSelected(selected.filter((p) => p !== product));
      setWarning("");
    } else if (selected.length < 3) {
      setSelected([...selected, product]);
      setWarning("");
    } else {
      setWarning("You can only compare up to 3 products.");
    }
  };

  return (
    <>
      <div className="products-page">
        <h1>🧴 Skincare Products</h1>
        <ProductList
          products={products}
          selected={selected}
          onToggleProduct={toggleProduct}
        />

        {warning && <p className="warning">{warning}</p>}

        {selected.length > 0 && (
          <button className="compare-btn" onClick={() => setShowModal(true)}>
            Compare ({selected.length})
          </button>
        )}

        {showModal && (
          <ComparisonModal
            selected={selected}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </>
  );
}
