import React, { ChangeEvent } from "react";
import "./CheckBox.scss";

interface ICheckBoxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CheckBox = ({ checked, onChange }: ICheckBoxProps) => {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.checked);
  };

  return (
    <label className="label">
      <input className="checkbox" type="checkbox" checked={checked} onChange={handleCheck} />
      <span className="checkmark"></span>
    </label>
  );
};
