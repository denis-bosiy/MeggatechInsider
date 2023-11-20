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
  pageUrl?: string;
  onLogout?: () => void;
}

export const Header = ({ children, pageUrl, onLogout }: IHeaderProps) => {
  const getIsOnSchedulePage = (url?: string): boolean => (url ? url === AppRouter.LessonsSchedule : false);

  const dispatch = useDispatch();
  const { years, currentYear, weeks, currentWeek, isLogedIn } = useSelector(
    (state: { headerStore: HeaderData }) => state.headerStore
  );
  const [isOnSchedulePage, setIsOnSchedulePage] = useState<boolean>(getIsOnSchedulePage(pageUrl));

  useEffect(() => {
    // TODO: Добавить запрос на получение учебных лет
    // TODO: Добавить запрос на получение учебных недель
  }, []);

  useEffect(() => {
    setIsOnSchedulePage(getIsOnSchedulePage(pageUrl));
  }, [pageUrl]);

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
          {isOnSchedulePage && <Select onValueChange={handleWeekChanging} options={weeks} currentValue={currentWeek} />}
        </div>
        <nav className="header-container__navigation">{children}</nav>
        <div className="header-actions">
          {!isOnSchedulePage && (
            <Select onValueChange={handleYearChanging} options={years} currentValue={currentYear} />
          )}
          {isLogedIn && <IconButton icon={<Logout />} onClick={handleLogOut} />}
        </div>
      </div>
    </header>
  );
};
