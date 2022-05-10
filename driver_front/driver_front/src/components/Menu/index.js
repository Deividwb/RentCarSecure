import React from "react";
import "../styles.css";
import LogoImg from "../../assets/images/logo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';

const Menu = () => {
  return (
    <>
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={LogoImg} alt="logo" />
            </span>

            <div className="text header-text">
              <span className="name">Manager Driver</span>
              <span className="profession">developer</span>
            </div>
          </div>
          <div className="toggle">
            <ArrowForwardIosIcon />
          </div>

          <div className="menu-bar">
            <div className="menu">
              <li className="nav-link">
                <NavLink to={"/register_driver"}>
                  <SearchIcon className="icon" />
                </NavLink>
                <input type="search" placeholder="Procurar..."></input>
              </li>

              <ul className="menu-links">
                <li className="nav-link">
                  <NavLink to={"/register_driver"}>
                    <HomeIcon className="icon" />
                  </NavLink>
                  <span className="text nav-text">Dashboard</span>
                </li>
                <li className="nav-link">
                  <NavLink to={"/register_driver"}>
                    <HomeIcon className="icon" />
                  </NavLink>
                  <span className="text nav-text">Dashboard</span>
                </li>
                <li className="nav-link">
                  <NavLink to={"/register_driver"}>
                    <HomeIcon className="icon" />
                  </NavLink>
                  <span className="text nav-text">Dashboard</span>
                </li>
                <li className="nav-link">
                  <NavLink to={"/register_driver"}>
                    <HomeIcon className="icon" />
                  </NavLink>
                  <span className="text nav-text">Dashboard</span>
                </li>
                <li className="nav-link">
                  <NavLink to={"/register_driver"}>
                    <HomeIcon className="icon" />
                  </NavLink>
                  <span className="text nav-text">Dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Menu;
