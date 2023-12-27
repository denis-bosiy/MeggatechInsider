import React from "react";
import { classNames } from "../../utils/classNames";

import "./ActionButton.scss";

export enum ActionButtonType {
  Warning = "WARNING",
  Default = "DEFAULT",
  Positive = "POSITIVE",
  Negative = "NEGATIVE"
}

export enum ActionButtonSize {
  Default = "DEFAULT",
  Small = "SMALL"
}

interface Props {
  label: string;
  type?: ActionButtonType;
  size?: ActionButtonSize;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ActionButton = (props: Props) => {
  const actionButtonType: ActionButtonType = props.type ?? ActionButtonType.Default;
  const actionButtonSize: ActionButtonSize = props.size ?? ActionButtonSize.Default;

  return (
    <button
      className={classNames(
        props.className,
        "action-button",
        "-" + actionButtonType.toLowerCase(),
        "-" + actionButtonSize.toLowerCase()
      )}
      onClick={props.onClick}
    >
      {props.icon && <div className="action-button__icon">{props.icon}</div>}

      <span className="action-button__text">{props.label}</span>
    </button>
  );
};

export default ActionButton;
