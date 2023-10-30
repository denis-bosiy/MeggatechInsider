import React from "react";

import "./Page.scss";

interface IPageProps {
  children?: React.ReactNode;
}

export const Page = ({ children }: IPageProps) => {
  return (
    <div className="page">
      <div className="page-content">{children}</div>
    </div>
  );
};
