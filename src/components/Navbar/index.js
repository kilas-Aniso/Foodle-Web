import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light text-dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">Foodle</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto font-size-24px">
              <li className="nav-item">
                <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-dark" href="#">Offer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-dark" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-dark" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">About Us</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <span className="nav-link text-dark">Login</span>
                </li>
                <li className="nav-item">
                  <a className="btn btn-sm custom-signup-btn" href="#" style={{ borderRadius: "5px", padding: "10px 20px"}}>Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
