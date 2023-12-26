import React from "react";
import "./CommonBlock.scss";

interface CommonContentProps {
  title: string;
  content: React.ReactNode;
}

const CommonBlock = ({ title, content }: CommonContentProps) => {
  return (
    <div className="teacher-settings-common-block">
      <div className="h2 teacher-settings-common-title">{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default CommonBlock;
