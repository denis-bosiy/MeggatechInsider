import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";

import "./Root.scss";
import { Link, LinkType } from "../components/Link/Link";
import { Page } from "../layouts/Page/Page";
import PageNavigation from "../components/PageNavigation/PageNavigation";

const Root = () => {
  return (
    <div className="root">
      <Header>
        <Link type={LinkType.Light} label="Статистика бюджетов" path="/" />
        <Link type={LinkType.Light} label="Статистика категорий" path="/" />
        <Link type={LinkType.Light} label="Статистика преподавателей" path="/" />
      </Header>
      <PageNavigation
        title="Статистика категорий"
        text="Бюджетные категории"
        onBack={() => {
          // ...
        }}
      />
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </div>
  );
};

export default Root;
