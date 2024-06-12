import React from "react";
import styles from "./HomePage.module.css";
import Banner from "components/layout/Banner";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <main className={styles.oi}>
      <Banner />
      <Outlet />
    </main>
  );
};

export default HomePage;
