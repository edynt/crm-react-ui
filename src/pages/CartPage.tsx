import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  
  console.log('cart', cart);

  const handleAddItem = () => {
    addToCart({ id: "123", name: "Item A", quantity: 1 });
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
  };

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {cart.map((item: any) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
