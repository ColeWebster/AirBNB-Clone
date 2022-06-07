import React from "react";
import Logo from "../images/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="logo" />
    </div>
  );
}
