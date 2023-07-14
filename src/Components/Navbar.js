import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="data:image/png;base64,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" alt="Logo"  width={"45px"}/>
             
          </Link>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Course">Course</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


