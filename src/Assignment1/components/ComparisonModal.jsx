import React from "react";

export default function ComparisonModal({ selected, onClose }) {
  if (selected.length === 0) return null;

  const allSpecKeys = Array.from(
    new Set(selected.flatMap((p) => Object.keys(p.specs)))
  );

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Product Comparison</h2>

        <div className="comparison-scroll-wrapper">
          <div className="comparison-table">
            <div className="comparison-row header">
              <div className="spec-label">Spec</div>
              {selected.map((p) => (
                <div key={p.id} className="product-value">{p.name}</div>
              ))}
            </div>

            {allSpecKeys.map((key) => (
              <div className="comparison-row" key={key}>
                <div className="spec-label">{key}</div>
                {selected.map((p) => (
                  <div key={p.id} className="product-value">{p.specs[key] || "—"}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
