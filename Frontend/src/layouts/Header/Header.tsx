import React from "react";

import { Logo, Logout } from "../../icons";
import IconButton from "../../components/IconButton/IconButton";

import "./Header.scss";
import { Link } from "react-router-dom";
import Select from "../../components/Select/Select";

interface IHeaderProps {
  children?: React.ReactNode;
  onLogout?: () => void;
}

export const Header = ({ children, onLogout }: IHeaderProps) => {
  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="header-container__navigation">{children}</nav>
        <div className="header-actions">
          <Select
            onValueChange={() => {
              // ...
            }}
            options={[
              { content: "Учебный год 2022-2023", id: "1" },
              { content: "Учебный год 2023-2024", id: "2" }
            ]}
          />
          {onLogout && <IconButton icon={<Logout />} onClick={onLogout} />}
        </div>
      </div>
    </header>
  );
};
