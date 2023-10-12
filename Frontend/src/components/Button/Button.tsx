import React from "react";

import "./Button.scss";

interface Props {
  icon?: React.ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ icon, label, className, onClick }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {icon}
      {label}
    </button>
  );
};
