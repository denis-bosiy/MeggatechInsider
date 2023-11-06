import React from "react";
import {Link} from "react-router-dom";
import "./MenuPage.scss";
import Button, {ButtonSize} from "../../components/Button/Button";
import {AppRouter} from "../../App";

const MenuPage = () => {
  return (
    <>
      <div className="menu-wrapper">
        <div className="menu-wrapper__column">
          <Link to={AppRouter.Settings}>
            <Button label="Вводные данные" size={ButtonSize.Kilo} />
          </Link>
          <Link to={AppRouter.Syllabus}>
            <Button label="Учебный план" size={ButtonSize.Kilo} />
          </Link>
          <Link to="#">
            <Button label="План курсов" size={ButtonSize.Kilo} />
          </Link>
          <Link to="#">
            <Button label="Финансовый отчет" size={ButtonSize.Kilo} />
          </Link>
          <Link to="#">
            <Button label="Статистика" size={ButtonSize.Kilo} />
          </Link>
        </div>
        <div className="menu-wrapper__column">
          <Link to="#">
            <Button label="Расписание занятий" size={ButtonSize.Kilo} />
          </Link>
          <Link to="#">
            <Button label="Расписание курсов" size={ButtonSize.Kilo} />
          </Link>
          <Link to="#">
            <Button label="Контроль учебного плана за месяц " size={ButtonSize.Kilo} />
          </Link>
          <Link to="#">
            <Button label="Контроль учебного плана за год" size={ButtonSize.Kilo} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
