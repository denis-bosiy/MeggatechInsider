import React from "react";
import {Link} from "react-router-dom";
import "./MenuPage.scss";
import Button, {ButtonSize} from "../../components/Button/Button";
import {AppRouter} from "../../router";

interface MenuItem {
  url: string
  label: string
}
const Menu: MenuItem[] = [
  { url: AppRouter.Settings, label: "Вводные данные" },
  { url: AppRouter.Timetable, label: "Расписание занятий" },
  { url: AppRouter.Syllabus, label: "Учебный план" },
  { url: "#", label: "Расписание курсов" },
  { url: "#", label: "План курсов" },
  { url: "#", label: "Контроль учебного плана за месяц" },
  { url: "#", label: "Финансовый отчет" },
  { url: "#", label: "Контроль учебного плана за год" },
  { url: "#", label: "Статистика" },
];

const MenuPage = () => {
  return (
    <>
      <div className="menu-wrapper">
        {Menu.map((item) => (
          <Link to={item.url} key={item.label}>
            <Button label={item.label} size={ButtonSize.Kilo} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default MenuPage;
