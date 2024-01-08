import React, { useState } from "react";
import "./NavBar.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navBar">
      {isOpen ? (
        <div className="menu-items">
          <RxCross1 className="close" onClick={closeMenu} />
          <div className="menu-content">
            <h1>Frienzly</h1>
            <p>
              Frienzly is a social networking application that helps you stay
              connected with your friends in a new way. Our goal is to provide
              you with some great features that can fill up the distance between
              your friends in an awesome way.
            </p>
            <h3>contact@frienzly.online</h3>
            <div className="social-links">
              <a href="/">LinkedIn</a>
              <a href="/about">Instagram</a>
              <a href="/contact">Facebook</a>
              <a href="/contact">Twitter</a>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="navBar-sec">
            <img src="../full_logo.png" />
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <HiOutlineMenuAlt4 className="menu-icon" onClick={openMenu} />
          </div>
        </>
      )}
    </div>
  );
}
