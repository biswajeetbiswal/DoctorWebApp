import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container2 head">
      <div className="logo">DocApp</div>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/service">
          Services
        </Link>
        <Link className="link" to="/home">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
