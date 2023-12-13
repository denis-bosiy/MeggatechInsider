import React from "react";
import "./NotFoundPage.scss";
import { Link } from "../../components/Link/Link";
import { AppRouter } from "../../router";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="h1 not-found-page__heading">Такой страницы не существует</h1>

      <Link path={AppRouter.Main} label="Перейти в меню" />
    </div>
  );
};

export default NotFoundPage;
