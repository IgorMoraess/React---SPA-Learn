import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Rodape from "components/layout/Rodape";
import HomePage from "components/pages/HomePage";
import PostAbout from "components/Post/PostAbout";
import NaoEncontrada from "components/pages/NaoEncontrada";
import ScrollToTop from "components/Scroll/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="/sobremim" element={<About />} />
        </Route>

        <Route path="/posts/:id" element={<PostAbout />} />
        <Route path="*" element={<NaoEncontrada />} />

      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
