import React from "react";

import { Link, LinkType } from "../Link/Link";
import { ArrowLeft } from "../../icons";
import TabButton from "../TabButton/TabButton";
import { TabNavigation } from "../../router";

import "./PageNavigation.scss";

interface IPageNavigationProps {
  title?: string;
  text: string | null;
  onBack?: boolean;
  currentTab: string | null;
  tabs?: TabNavigation;
  onTabChange?: (value: string) => void;
}

const PageNavigation = ({ title, text, currentTab, tabs, onBack, onTabChange }: IPageNavigationProps) => {
  const tabKeys = (tabs && Object.keys(tabs)) || [];

  return (
    <div className="page-navigation">
      <div className="page-navigation__container">
        <div className="navigation-actions">
          {!!onBack && <Link icon={<ArrowLeft />} path={-1} type={LinkType.Important} label="Назад" />}
          {!!title && <h1 className="navigation-text">{title}</h1>}
          {!!text && <span className="navigation-text">{text}</span>}
        </div>
        {tabs && (
          <div className="navigation-tabs">
            {tabKeys.map((tab, index) => (
              <TabButton
                key={index}
                label={tabs[tab]}
                selected={currentTab === tab}
                onSelect={() => onTabChange && onTabChange(tab)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;
