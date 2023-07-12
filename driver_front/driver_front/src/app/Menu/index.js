import React, { useEffect, useState } from "react";
// import "../styles.css";
import "../Menu/styles.css";
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
import { useDispatch, useSelector } from "react-redux";
import { isActive, notActive } from "../../store/activeMenuReducer";

const Menu = () => {
  const [active, setActive] = useState();
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState(false);

  const dispatch = useDispatch();

  const handleDark = () => {
    if (isDark === false) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

  const handleLanguage = () => {
    setLanguage(!language);
  };
  const menuActive = useSelector((state) => state.menu.isActive);

  const handleSidebar = () => {
    if (!menuActive) {
      return dispatch(isActive());
    }
    dispatch(notActive());

    // dispatch(isActive());
    // setTimeout(() => {
    //   dispatch(notActive());
    // }, 3000);
  };

  // useEffect(() => {
  //   console.log("DEivid", menuActive);
  // }, []);

  return (
    <>
      <div className={isDark ? "body dark" : "body"}>
        <nav className={menuActive ? "sidebar close" : "sidebar"}>
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
                {/* <ul className="menu-links"> */}
                <li className="search-box">
                  <SearchIcon className="bx bx-search icon" />
                  <input type="search" placeholder="Procurar..."></input>
                </li>

                <li>
                  <NavLink to={"/driver-table"}>
                    <SupervisedUserCircleTwoToneIcon className="bx bx-home-alt icon" />
                    <span className="text nav-text">
                      {language ? "Motoristas" : "Driver"}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/teste"}>
                    <DriveEtaTwoToneIcon className="bx bx-home-alt icon" />
                    <span className="text nav-text">
                      {language ? "Carros" : "Cars"}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/register_driver"}>
                    <HomeIcon className="bx bx-home-alt icon" />
                    <span className="text nav-text">
                      {language ? "Manutenção" : "Suppport"}
                    </span>
                  </NavLink>
                </li>
                {/* </ul> */}
              </div>

              <li className="bottom-content">
                <NavLink to={"/register_driver"}>
                  <ExitToAppTwoToneIcon className="bx bx-log-out icon exit" />
                  <span className="text nav-text">
                    {language ? "Sair" : "Exit"}
                  </span>
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

              <li className="mode">
                <div className="moon-sun">
                  {language ? (
                    <>
                      <span className="mode-text text">Mude o idoma</span>
                    </>
                  ) : (
                    <>
                      <span className="mode-text text">Change Language</span>
                    </>
                  )}
                </div>

                <div
                  className={language ? "toggle-switchs  " : "toggle-switchs"}
                >
                  {/* <span className="switchs" onClick={handleLanguage}></span> */}
                  <span
                    className={language ? "switchs-change" : "switchs"}
                    onClick={handleLanguage}
                  ></span>
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
