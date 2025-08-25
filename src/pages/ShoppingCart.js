import React from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalItems, totalCost } = useCart();

  return (
    <div style={{padding: "20px"}}>
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      {totalItems === 0 && <p>Your cart is empty.</p>}
      {Object.values(cart).map(plant => (
        <div key={plant.id} style={{display: "flex", alignItems: "center", borderBottom: "1px solid #ddd", padding: "10px 0"}}>
          <img src={plant.thumbnail} alt={plant.name} style={{width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginRight: "15px"}} />
          <div style={{flex: 1}}>
            <h3>{plant.name}</h3>
            <p>Unit Price: ${plant.price}</p>
            <p>Quantity: {plant.quantity}</p>
            <div>
              <button onClick={() => increaseQty(plant.id)} style={{marginRight: "10px"}}>+</button>
              <button onClick={() => decreaseQty(plant.id)} style={{marginRight: "10px"}}>-</button>
              <button onClick={() => removeFromCart(plant.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
      <button onClick={() => alert("Coming Soon!")} style={{padding: "10px 20px", marginTop: "20px"}}>
        Checkout
      </button>
      <Link to="/products" style={{marginLeft: "20px"}}>
        <button style={{padding: "10px 20px", marginTop: "20px"}}>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default ShoppingCart;
