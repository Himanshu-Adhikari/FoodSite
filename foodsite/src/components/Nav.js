import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <Link className="nav-link fst-italic" to="/">Zayka</Link>
      <Link className="nav-link" to="/">Menu</Link>
      <Link className="nav-link" to="/">About</Link>
      <Link className="nav-link" to="/">Cart</Link>
      <Link className="nav-link" to="/login">Login</Link>

    </div>
  );
}

export default Nav;
