import React, { ChangeEvent } from "react";
import "./CheckBox.scss";
import { classNames } from "../../utils/classNames";

interface ICheckBoxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  isDisabled?: boolean;
}

export const CheckBox = ({ label, checked, onChange, isDisabled }: ICheckBoxProps) => {
  isDisabled = isDisabled ?? false;
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.checked);
  };

  return (
    <label className="checkbox-label-container">
      <div className={classNames("checkbox-label", isDisabled ? "-disabled" : "")} tabIndex={0}>
        <input className="checkbox" type="checkbox" checked={checked} onChange={handleCheck} tabIndex={-1} />
        <span className="checkmark"></span>
      </div>

      {label && <span>{label}</span>}
    </label>
  );
};
