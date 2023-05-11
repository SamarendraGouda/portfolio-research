import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbar__links}>
        <a href="#">Home</a>
        <a href="#">Academic Profile</a>
        <a href="#">Research</a>
        <a href="#">Teaching</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
