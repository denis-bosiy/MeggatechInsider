import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";

import "./Root.scss";

const Root = () => {
  return (
    <div className="root">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
