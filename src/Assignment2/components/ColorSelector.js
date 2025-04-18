import React from "react";

export default function ColorSelector({ color, setColor }) {
  const colors = ["white", "black", "red", "blue", "green"];

  return (
    <div className="selector">
      <label>Color:</label>
      <div className="color-options">
        {colors.map((c) => (
          <button
            key={c}
            className={`color-circle ${color === c ? "selected" : ""}`}
            style={{ backgroundColor: c }}
            onClick={() => setColor(c)}
          />
        ))}
      </div>
    </div>
  );
}
