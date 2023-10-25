import React from "react";
import { classNames } from "../../utils/classNames";

import "./IconButton.scss";

export enum IconButtonType {
  Secondary = "SECONDARY",
  Warning = "WARNING",
  White = "WHITE",
  Default = "DEFAULT"
};

interface Props {
  icon: React.ReactNode;
  small?: boolean;
  type?: IconButtonType;
  className?: string;
  onClick?: () => void;
}

const IconButton = (props: Props) => {
  const type: string = (props.type ?? IconButtonType.Default).toLowerCase();

  return (
    <button className={classNames("icon-button", props.className, props.small && "-small", "-" + type)} onClick={props.onClick}>
      {props.icon}
    </button>
  );
};

export default IconButton;
