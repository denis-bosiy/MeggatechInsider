import React, { useLayoutEffect, useRef, useState } from "react";
import { HiddenEyeIcon, OpenedEyeIcon, MagnifierIcon } from "../../icons";
import "./Input.scss";

export enum InputSize {
  Micro = "MICRO",
  Mini = "MINI",
  Medium = "MEDIUM"
}
export enum InputType {
  Text = "TEXT",
  Password = "PASSWORD",
  Search = "SEARCH"
}

interface IInputProps {
  value: string;
  placeholder: string;
  onValueChange: (newValue: string) => void;
  size?: InputSize;
  type?: InputType;
  isInvalidValue?: boolean;
  onSearch?: () => void;
}

const Input = (props: IInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [icon, setIcon] = useState<JSX.Element | null>(null);
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  const [inputType, setInputType] = useState<string>(props.type ?? InputType.Text);

  const size: string = props.size ?? InputSize.Medium;
  const isInvalidValue: boolean = props.isInvalidValue ?? false;

  const sizeModificator: string = size === InputSize.Medium ? "" : "-" + size.toLowerCase();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => props.onValueChange(e.currentTarget?.value);
  const onContainerInteract = () => {
    inputRef.current?.focus();
  };
  const onKeyboardKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const ENTER_KEY = "Enter";

    if (e.key === ENTER_KEY) {
      props.onSearch?.();
    }
  };

  const togglePasswordVisibility = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    if (isPasswordHidden) {
      setInputType(InputType.Text);
    } else {
      setInputType(InputType.Password);
    }
    setIsPasswordHidden(!isPasswordHidden);
  };

  useLayoutEffect(() => {
    if (inputType === InputType.Password) {
      setIcon(<HiddenEyeIcon className="icon" onClick={togglePasswordVisibility} />);
    } else if (inputType === InputType.Search) {
      setIcon(<MagnifierIcon className="icon" onClick={props.onSearch} />);
    } else if (inputType === InputType.Text && !isPasswordHidden) {
      setIcon(<OpenedEyeIcon className="icon" onClick={togglePasswordVisibility} />);
    } else {
      setIcon(null);
    }
  }, [inputType, isPasswordHidden]);

  return (
    <div
      className={"input-container" + (isInvalidValue ? " -error" : "") + (sizeModificator ? " " + sizeModificator : "")}
      onFocus={onContainerInteract}
      tabIndex={0}
    >
      <input
        className="input"
        ref={inputRef}
        type={inputType}
        value={props.value}
        onChange={onChange}
        placeholder={props.placeholder}
        onKeyDown={onKeyboardKeyDown}
        tabIndex={-1}
      />

      {icon}
    </div>
  );
};

export default Input;
