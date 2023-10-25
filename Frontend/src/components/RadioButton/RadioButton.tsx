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
    <label className="radio-label" tabIndex={0}>
      <input className="radio" type="radio" checked={checked} onChange={handleCheck} tabIndex={-1}/>
      <span className="radiomark"></span>
    </label>
  );
};
