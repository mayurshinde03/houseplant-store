import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Header from "./Components/Header";
import LandingPage from "./pages/LandingPage";
import ProductListing from "./pages/ProductListing";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
