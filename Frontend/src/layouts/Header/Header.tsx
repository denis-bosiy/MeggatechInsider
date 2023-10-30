import React from "react";

import "./Header.scss";
import { Logo } from "../../icons";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
      </div>
    </header>
  );
};
