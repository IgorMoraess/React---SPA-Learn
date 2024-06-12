import React from "react";
import styles from "./Navbar.module.css";
import MenuLink from "./MenuLink";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/sobremim">Sobre Mim</MenuLink>
      </nav>
    </header>
  );
};

export default Navbar;
