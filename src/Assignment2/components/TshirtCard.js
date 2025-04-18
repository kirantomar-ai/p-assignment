import React from "react";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import QuantitySelector from "./QuantitySelector";
import PriceDisplay from "./PriceDisplay";
import AddToCartButton from "./AddToCartButton";

export default function TShirtCard({
  size,
  setSize,
  color,
  setColor,
  quantity,
  setQuantity,
  price,
  onAddToCart,
}) {

    const colorImageMap = {
        white: "https://img.freepik.com/free-photo/stylish-happy-young-woman-posing-against-white-wall_176420-29206.jpg?ga=GA1.1.1829773682.1744980058&semt=ais_hybrid&w=740",
        black: "https://img.freepik.com/free-photo/confident-young-handsome-guy-wearing-black-t-shirt-points-side-isolated-white-wall-with-copy-space_141793-103364.jpg?ga=GA1.1.1829773682.1744980058&semt=ais_hybrid&w=740",
        red: "https://img.freepik.com/free-photo/irritated-young-delivery-man-wearing-uniform-cap-closing-ears-with-hands-with-eyes-closed-isolated-yellow-background_141793-136941.jpg?ga=GA1.1.1829773682.1744980058&semt=ais_hybrid&w=740",
        blue: "https://images.unsplash.com/photo-1654432008519-d296b718a3cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0JTIwbW9ja3VwJTIwYmx1ZXxlbnwwfHwwfHx8MA%3D%3D",
        green: "https://img.freepik.com/free-photo/confident-young-caucasian-girl-green-shirt-shows-back-hand-pointing-upwards-isolated-orange-background_141793-34342.jpg?semt=ais_hybrid&w=740",
      };
  
  return (
    <div className="tshirt-card">
      <img
        src={colorImageMap[color]}
        alt={`${color} T-shirt`}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
          marginBottom: "20px",
          borderRadius:"5px"
        }}
      />
      <SizeSelector size={size} setSize={setSize} />
      <ColorSelector color={color} setColor={setColor} />
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <PriceDisplay price={price} />
      <AddToCartButton onAddToCart={onAddToCart} />
    </div>
  );
}
