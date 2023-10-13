import React from "react";
import { classNames } from "../../utils/classNames";

import "./IconButton.scss";

interface Props {
  icon: React.ReactNode;
  small?: boolean;
  type?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const IconButton = ({ icon, type, small, className, onClick }: Props) => {
  return (
    <button className={classNames("icon-button", className, small && "small", type)} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
