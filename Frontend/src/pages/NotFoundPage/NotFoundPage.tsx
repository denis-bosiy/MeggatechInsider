import React from "react";
import "./NotFoundPage.scss";
import { Link, LinkType } from "../../components/Link/Link";
import { AppRouter } from "../../router";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page__info">
        <h1 className="h1 not-found-page__heading">Такой страницы нет</h1>

        <Link path={AppRouter.Main} label="Перейти в меню" />
      </div>
    </div>
  );
};

export default NotFoundPage;
