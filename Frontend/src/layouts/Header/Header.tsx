import React, { useEffect, useState } from "react";

import { Logo, Logout } from "../../icons";
import IconButton from "../../components/IconButton/IconButton";

import "./Header.scss";
import { Link } from "react-router-dom";
import Select from "../../components/Select/Select";
import { useDispatch, useSelector } from "react-redux";
import { HeaderData } from "./model/types";
import { HeaderActionBuilder } from "./model/actions";
import { AppRouter } from "../../router";

interface IHeaderProps {
  children?: React.ReactNode;
  pageRoute?: string;
  onLogout?: () => void;
}

export const Header = ({ children, pageRoute, onLogout }: IHeaderProps) => {
  const getIsOnLogin = (route?: string): boolean => (route ? route === AppRouter.Login : false);
  const getIsOnSchedule = (route?: string): boolean => (route ? route === AppRouter.Timetable : false);

  const dispatch = useDispatch();
  const { years, currentYear, weeks, currentWeek, isLogedIn } = useSelector(
    (state: { headerStore: HeaderData }) => state.headerStore
  );
  const [isOnLogin, setIsOnLogin] = useState<boolean>(getIsOnLogin(pageRoute));
  const [isOnSchedule, setIsOnSchedule] = useState<boolean>(getIsOnSchedule(pageRoute));

  useEffect(() => {
    //
  }, []);

  useEffect(() => {
    setIsOnLogin(getIsOnLogin(pageRoute));
    setIsOnSchedule(getIsOnSchedule(pageRoute));
  }, [pageRoute]);

  const handleYearChanging = (id: string): void => {
    dispatch(HeaderActionBuilder.chooseYear(id));
  };
  const handleWeekChanging = (id: string): void => {
    dispatch(HeaderActionBuilder.chooseWeek(id));
  };
  const handleLogOut = (): void => {
    dispatch(HeaderActionBuilder.logOut());
    onLogout?.();
  };

  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/">
          <Logo />
        </Link>
        <div className="header-actions">
          {isOnSchedule && <Select onValueChange={handleWeekChanging} options={weeks} currentValue={currentWeek} />}
        </div>
        <nav className="header-container__navigation">{children}</nav>
        <div className="header-actions">
          {!isOnLogin && <Select onValueChange={handleYearChanging} options={years} currentValue={currentYear} />}
          {isLogedIn && <IconButton icon={<Logout />} onClick={handleLogOut} />}
        </div>
      </div>
    </header>
  );
};
