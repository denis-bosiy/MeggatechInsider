import React from "react";
import { classNames } from "../../utils/classNames";

import "./ActionButton.scss";

export enum ActionButtonType {
  Warning = "WARNING",
  Default = "DEFAULT",
  Positive = "POSITIVE",
  Negative = "NEGATIVE"
}

interface Props {
  label: string;
  type?: ActionButtonType;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ActionButton = (props: Props) => {
  const actionButtonType: ActionButtonType = props.type ?? ActionButtonType.Default;

  return (
    <button className={classNames(props.className, "action-button", "-" + actionButtonType.toLowerCase())} onClick={props.onClick}>
      {props.icon && <div className="action-button__icon">{props.icon}</div>}

      <span className="action-button__text">{props.label}</span>
    </button>
  );
};

export default ActionButton;
