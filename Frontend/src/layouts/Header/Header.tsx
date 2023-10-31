import React from "react";

import { Logo, Logout } from "../../icons";
import IconButton from "../../components/IconButton/IconButton";

import "./Header.scss";
import { Link } from "react-router-dom";

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
        <div className="header-actions">{onLogout && <IconButton icon={<Logout />} />}</div>
      </div>
    </header>
  );
};
