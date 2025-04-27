import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ id: "123", name: "Item A", quantity: 1 })}>
        Add Item
      </button>
    </div>
  );
};

export default Cart;
