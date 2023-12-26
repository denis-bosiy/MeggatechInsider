import React from "react";
import { classNames } from "../../utils/classNames";

import "./Button.scss";

export enum ButtonType {
  Primary = "PRIMARY",
  Secondary = "SECONDARY",
  Default = "DEFAULT"
}

export enum ButtonSize {
  Kilo = "KILO",
  Fixed = "FIXED",
  Small = "SMALL",
  Default = "DEFAULT"
}

interface Props {
  label: string;
  className?: string;
  type?: ButtonType;
  size?: ButtonSize;
  onClick?: () => void;
}

const Button = (props: Props) => {
  const type: ButtonType = props.type ?? ButtonType.Default;
  const size: ButtonSize = props.size ?? ButtonSize.Default;

  return (
    <button
      className={classNames("button", props.className, "-" + type.toLowerCase(), "-" + size.toLowerCase())}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
