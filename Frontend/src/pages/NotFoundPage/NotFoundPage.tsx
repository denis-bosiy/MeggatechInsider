import React from "react";
import "./NotFoundPage.scss";
import Button, { ButtonType } from "../../components/Button/Button";
import { NavigateFunction, useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate: NavigateFunction = useNavigate();

  const goToMenuPage = (): void => {
    navigate("/");
  };

  return (
    <div className="not-found-page">
      <div className="not-found-page__info">
        <h1 className="h1 not-found-page__heading">Ой!</h1>

        <p className="not-found-page__hint">
          Кажется, такой страницы не существует. Проверьте правильность написания адреса или вернитесь на главный экран.
        </p>

        <Button label={"Вернуться на главный экран"} onClick={goToMenuPage} type={ButtonType.Primary} />
      </div>
    </div>
  );
};

export default NotFoundPage;
