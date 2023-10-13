import React from "react";
import { classNames } from "../../utils/classNames";

import "./ActionButton.scss";

interface Props {
  icon?: React.ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
}

const ActionButton = ({ icon, label, className, onClick }: Props) => {
  return (
    <button className="action-button" onClick={onClick}>
      {icon}
      {label}
    </button>
  );
};

export default ActionButton;
