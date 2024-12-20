import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleMenuClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) setButton(false);
    else setButton(true);
  };
  console.log(`isAuthenticated: ${isAuthenticated}`);
  // To maintain the state of the button when the component is mounted and unmounted we use useEffect hook with an empty array as the second argument to the useEffect function. This will ensure that the useEffect function is only called once when the component is mounted.
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            ALP <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleMenuClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/recommendations"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Recommendations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign-up
              </Link>
            </li>
          </ul>
          {isAuthenticated
            ? button && (
                <Button
                  type="button"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  buttonStyle="btn--outline"
                  buttonSize="btn--medium"
                >
                  Log Out
                </Button>
              )
            : button && (
                <Button
                  type="button"
                  onClick={() => loginWithRedirect()}
                  buttonStyle="btn--outline"
                  buttonSize="btn--medium"
                >
                  Log In
                </Button>
              )}
        </div>
      </div>
    </>
  );
}
export default Navbar;