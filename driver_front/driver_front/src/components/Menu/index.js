import React from "react";
import "../styles.css";
import LogoImg from "../../assets/images/logo.png";

const Menu = () => {
  return (
    <>
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={LogoImg} alt="logo" />
            </span>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Menu;
