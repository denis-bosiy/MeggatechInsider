import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { Page } from "../layouts/Page/Page";
import { Link, LinkType } from "../components/Link/Link";
import PageNavigation from "../components/PageNavigation/PageNavigation";
import { AppRouter, Menu, NavigationItem } from "../router";

import "./Root.scss";
import { ScheduleNavigation } from "../components/ScheduleNavigation/ScheduleNavigation";

const ProtectedRoot = () => {
  const { pathname } = useLocation();
  const locations: string[] = pathname.split("/").filter(String);
  const lastLocation: string = locations[locations.length - 1];
  const navigate = useNavigate();

  const route = Menu.find((element) => locations.includes(element.url));
  const navigation = (route && route.navigation) || [];
  const page: NavigationItem | undefined = navigation.find((nav) => lastLocation === nav.url || nav.url === "");

  const tabs = (page && page.tabs && Object.keys(page.tabs)) || [];

  const [tabParams, setTabParams] = useSearchParams();
  const tabValue = tabParams.get("tab");
  const currentTab = (page && page.tabs && tabValue && page.tabs[tabValue]) || null;

  const logout = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (tabs.length !== 0 && tabParams.get("tab") === null) {
      setTabParams({ tab: tabs[0] });
    }
  }, [tabs, tabParams]);

  return (
    <div className="root">
      <Header onLogout={logout} pageRoute={route?.url}>
        {route &&
          navigation.map((item, index) => (
            <Link key={index} type={LinkType.Light} label={item.label} path={`${route.url}/${item.url}`} />
          ))}
      </Header>
      <React.Fragment>
        {page && page.url !== AppRouter.LessonsSchedule && (
          <PageNavigation
            onBack
            title={page.label}
            text={currentTab}
            currentTab={tabValue}
            tabs={page.tabs}
            onTabChange={(value) => setTabParams({ tab: value })}
          />
        )}
        {page && page.url === AppRouter.LessonsSchedule && <ScheduleNavigation />}
      </React.Fragment>
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </div>
  );
};

export default ProtectedRoot;
