import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { Page } from "../layouts/Page/Page";
import { Link, LinkType } from "../components/Link/Link";
import PageNavigation from "../components/PageNavigation/PageNavigation";
import { Menu } from "../router";

import "./Root.scss";

const ProtectedRoot = () => {
  const { pathname } = useLocation();
  const locations = pathname.split("/").filter(String);
  const navigate = useNavigate();

  const route = Menu.find((element) => locations.includes(element.url));
  const navigation = (route && route.navigation) || [];
  const page = navigation.find((nav) => locations.includes(nav.url) || nav.url === "");

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
      {page && (
        <PageNavigation
          onBack
          title={page.label}
          text={currentTab}
          currentTab={tabValue}
          tabs={page.tabs}
          onTabChange={(value) => setTabParams({ tab: value })}
        />
      )}
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </div>
  );
};

export default ProtectedRoot;
