import React from "react";
import "./CommonContent.scss";

interface CommonContentProps {
  button: React.ReactNode;
  table: React.ReactNode;
}

const CommonContent = ({ button, table }: CommonContentProps) => {
  return (
    <div className="teacher-settings-common-content">
      <div>{button}</div>
      <div>{table}</div>
    </div>
  );
};

export default CommonContent;
