import React, { useState } from "react";
import "../styles.css";
import LogoImg from "../../assets/images/logo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DriveEtaTwoToneIcon from "@mui/icons-material/DriveEtaTwoTone";
import SupervisedUserCircleTwoToneIcon from "@mui/icons-material/SupervisedUserCircleTwoTone";

const Menu = () => {
  const [active, setActive] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSidebar = () => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleDark = () => {
    if (isDark === false) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

  return (
    <>
      <div className={isDark ? "body dark" : "body"}>
        <nav className={active ? "sidebar close" : "sidebar"}>
          <header>
            <div className="image-text">
              <span className="image">
                <img src={LogoImg} alt="logo" />
              </span>

              <div className="text header-text">
                <span className="name">Manager Driver</span>
                <span className="profession">Apps</span>
              </div>
            </div>
            <div className="toggle" onClick={handleSidebar}>
              <ArrowForwardIosIcon />
            </div>

            <div className="menu-bar">
              <div className="menu">
                <li className="search-box">
                  <SearchIcon className="bx bx-search icon" />
                  <input type="search" placeholder="Procurar..."></input>
                </li>

                {/* <ul className="menu-links"> */}
                <li className="nav-link">
                  <NavLink to={"/register_driver"}>
                    <SupervisedUserCircleTwoToneIcon className="bx bx-home-alt icon" />
                    <span className="text nav-text">Motoristas</span>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to={"/register_driver"}>
                    <DriveEtaTwoToneIcon className="bx bx-home-alt icon" />
                    <span className="text nav-text">Carros</span>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to={"/register_driver"}>
                    <HomeIcon className="bx bx-home-alt icon" />
                    <span className="text nav-text">Manutenção</span>
                  </NavLink>
                </li>
                {/* </ul> */}
              </div>

              <li className="bottom-content">
                <NavLink to={"/register_driver"}>
                  <ExitToAppTwoToneIcon className="bx bx-log-out icon exit" />
                  <span className="text nav-text">Sair</span>
                </NavLink>
              </li>

              <li className="mode">
                <div className="moon-sun">
                  {isDark ? (
                     <>
                    <DarkModeTwoToneIcon className="bx bx-moon icon moon" />
                    <span className="mode-text text">Modo Escuro</span>
                    </>
                  ) : (
                    <>
                      <WbSunnyTwoToneIcon className="bx bx-sun icon sun" />
                      <span className="mode-text text">Modo Claro</span>
                    </>
                  )}
                </div>
                

                <div
                  className={
                    isDark ? "toggle-switch body dark " : "toggle-switch"
                  }
                >
                  <span className="switch" onClick={handleDark}></span>
                </div>
              </li>
            </div>
          </header>
        </nav>
      </div>
    </>
  );
};

export default Menu;
