import React from "react";
import { Link } from "react-router-dom";

const bgStyle = {
  backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
};

function LandingPage() {
  return (
    <div style={bgStyle}>
      <h1>Awesome Houseplants Co.</h1>
      <p>We deliver unique houseplants to brighten your home and life.</p>
      <Link to="/products">
        <button style={{padding: "12px 24px", fontSize: "16px", cursor: "pointer", marginTop: "20px"}}>
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
