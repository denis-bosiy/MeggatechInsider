import React from "react";
import { Link } from "react-router-dom";
import "./MenuPage.scss";
import Button, { ButtonSize } from "../../components/Button/Button";
import { Menu } from "../../router";

const MenuPage = () => {
  return (
    <>
      <div className="menu-wrapper">
        <div className="menu-wrapper__column">
          {Menu.filter((e, i) => (i % 2) - 1).map((item) => (
            <Link to={item.url} key={item.label}>
              <Button label={item.label} size={ButtonSize.Kilo} />
            </Link>
          ))}
        </div>
        <div className="menu-wrapper__column">
          {Menu.filter((e, i) => i % 2).map((item) => (
            <Link to={item.url} key={item.label}>
              <Button label={item.label} size={ButtonSize.Kilo} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
