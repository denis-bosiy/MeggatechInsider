import React from "react";
import { classNames } from "../../utils/classNames";

import "./Button.scss";

interface Props {
  label: string;
  className?: string;
  colorScheme?: "blue" | "dark-blue";
  onClick?: () => void;
}

const Button = ({ label, className, colorScheme, onClick }: Props) => {
  return (
    <button className={classNames("button", className, colorScheme)} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
