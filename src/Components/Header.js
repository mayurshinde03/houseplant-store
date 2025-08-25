import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

function Header() {
  const { totalItems } = useCart();

  return (
    <header style={{display:"flex", justifyContent:"space-between", padding:"10px 20px", background:"#228B22", color:"white"}}>
      <nav>
        <Link to="/" style={{marginRight:15, color:"white", textDecoration:"none"}}>Landing</Link>
        <Link to="/products" style={{marginRight:15, color:"white", textDecoration:"none"}}>Products</Link>
        <Link to="/cart" style={{color:"white", textDecoration:"none"}}>
          🛒 Cart {totalItems > 0 ? `(${totalItems})` : ''}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
