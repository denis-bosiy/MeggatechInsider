import React from "react";

import "./Button.scss";

interface Props {
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export const Button = ({ icon, label }: Props) => {
  return (
    <button>
      {icon}
      {label}
    </button>
  );
};
