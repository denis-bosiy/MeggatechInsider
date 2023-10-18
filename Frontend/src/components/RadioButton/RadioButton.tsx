import React, { ChangeEvent } from "react";
import "./RadioButton.scss";

interface IRadioButtonProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const RadioButton = ({ checked, onChange }: IRadioButtonProps) => {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.checked);
  };

  return (
    <label className="label">
      <input className="checkbox" type="radio" checked={checked} onChange={handleCheck} />
      <span className="checkmark"></span>
    </label>
  );
};
