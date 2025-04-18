import React from "react";

export default function SizeSelector({ size, setSize }) {
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="selector">
      <label>Size:</label>
      <select value={size} onChange={(e) => setSize(e.target.value)}>
        {sizes.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
