import React from "react";
import { classNames } from "../../utils/classNames";

import "./TabButton.scss";

interface ITabButtonProps {
  label: string;
  selected?: boolean;
  onSelect?: () => void;
}

const TabButton = ({ label, selected, onSelect }: ITabButtonProps) => {
  return (
    <div className={classNames("tab-button", selected && "-selected")} onClick={onSelect}>
      {label}
    </div>
  );
};

export default TabButton;
