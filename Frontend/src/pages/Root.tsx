import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { Page } from "../layouts/Page/Page";
import { OutsideMenu } from "../router";

import "./Root.scss";

const Root = () => {
  const { pathname } = useLocation();
  const locations: string[] = pathname.split("/").filter(String);
  const route = OutsideMenu.find((element) => locations.includes(element.url));

  return (
    <div className="root">
      <Header pageRoute={route?.url} />
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </div>
  );
};

export default Root;
