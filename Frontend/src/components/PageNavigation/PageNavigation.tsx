import React from "react";

import "./PageNavigation.scss";
import { Link, LinkType } from "../Link/Link";
import { ArrowLeft } from "../../icons";

interface IPageNavigationProps {
  title?: string;
  text?: string;
  onBack?: () => void;
}

const PageNavigation = ({ title, text, onBack }: IPageNavigationProps) => {
  return (
    <div className="page-navigation">
      <div className="page-navigation__container">
        {onBack && <Link icon={<ArrowLeft />} path="/" type={LinkType.Important} label="Назад" />}
        {!!title && <h1>{title}</h1>}
        {!!text && <span>{text}</span>}
      </div>
    </div>
  );
};

export default PageNavigation;
