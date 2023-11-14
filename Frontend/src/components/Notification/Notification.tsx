import React from "react";
import { WarningIcon } from "../../icons";
import { classNames } from "../../utils/classNames";
import "./Notification.scss";

interface INotificationProps {
  title: string;
  description: string;
  className?: string;
}

const Notification = (props: INotificationProps) => {
  return (
    <div className={classNames("notification", props.className)}>
      <div className="notification__header">
        <WarningIcon />
        <h3 className="notification__heading">{props.title}</h3>
      </div>
      <div className="notification__body">{props.description}</div>
    </div>
  );
};

export default Notification;
