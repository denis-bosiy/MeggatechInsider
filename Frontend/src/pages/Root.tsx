import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { Page } from "../layouts/Page/Page";

import "./Root.scss";

const Root = () => {
  return (
    <div className="root">
      <Header />
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </div>
  );
};

export default Root;
