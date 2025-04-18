import React, { useState } from "react";
import TShirtCard from "../components/TshirtCard";

const TShirtConfiguratorPage = () => {
  const BASE_PRICE = 499;

  const [size, setSize] = useState("M");
  const [color, setColor] = useState("white");
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const price = BASE_PRICE * quantity;

  return (
    <>
      <div className="configurator-page" style={{ padding: "20px" }}>
        <h1>👕 Customize Your T-shirt</h1>
        <TShirtCard
          size={size}
          setSize={setSize}
          color={color}
          setColor={setColor}
          quantity={quantity}
          setQuantity={setQuantity}
          price={price}
          onAddToCart={handleAddToCart}
        />
        {addedToCart && (
          <div className="confirmation">
            Added to cart: Size {size}, Color {color}, Qty {quantity}
          </div>
        )}
      </div>
    </>
  );
};

export default TShirtConfiguratorPage;
