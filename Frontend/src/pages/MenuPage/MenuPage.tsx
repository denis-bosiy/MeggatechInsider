import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MenuPage.scss";
import Button, { ButtonSize } from "../../components/Button/Button";
import { Menu } from "../../router";

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="menu-wrapper">
        <div className="menu-wrapper__column">
          {Menu.filter((e, i) => (i % 2) - 1).map((item) => (
            <React.Fragment key={item.label}>
              <Button label={item.label} size={ButtonSize.Kilo} onClick={() => navigate(item.url)} />
            </React.Fragment>
          ))}
        </div>
        <div className="menu-wrapper__column">
          {Menu.filter((e, i) => i % 2).map((item) => (
            <React.Fragment key={item.label}>
              <Button label={item.label} size={ButtonSize.Kilo} onClick={() => navigate(item.url)} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
