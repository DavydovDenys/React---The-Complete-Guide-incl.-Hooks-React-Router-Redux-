import logo from "../logo.svg";
import React from "react";
import style from "./ReactLogo.module.css"


const ReactLogo = () => {
  return (
  <div className={style.App}>
    <header className={style.AppHeader}>
      <img src={logo} className={style.AppLogo} alt="logo"/>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  );
}

