import React, { useLayoutEffect, useState, useRef } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../icons";
import "./Select.scss";

export enum SelectSize {
  Micro = "MICRO",
  Milli = "MILLI",
  Default = "DEFAULT"
}
export interface ISelectOption {
  id: string;
  content: string;
}

interface ISelectProps {
  options: ISelectOption[];
  onValueChange: (id: string) => void;
  size?: SelectSize;
}

const Select = (props: ISelectProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const mapOfOptionsIdToContent: Map<string, string> = new Map<string, string>();
  const [icon, setIcon] = useState<JSX.Element | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  props.options.forEach((option: ISelectOption) => mapOfOptionsIdToContent.set(option.content, option.id));
  const size: string = props.size ?? SelectSize.Default;
  const sizeModificator: string = size === SelectSize.Default ? "" : "-" + size.toLowerCase();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget) {
      const optionId: string | undefined = mapOfOptionsIdToContent.get(e.currentTarget.value);
      optionId && props.onValueChange(optionId);
    }
  };
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const closeSelect = () => setIsActive(false);

  const options = props.options.map((option: ISelectOption) => (
    <option key={option.id} value={option.content}>
      {option.content}
    </option>
  ));
  useLayoutEffect(() => {
    if (isActive) {
      setIcon(<ArrowUpIcon className="select__icon icon" />);
    } else {
      setIcon(<ArrowDownIcon className="select__icon icon" />);
    }
  }, [isActive]);
  useLayoutEffect(() => {
    const KEY_DOWN_EVENT = "keydown";
    const keyboardListener = (e: KeyboardEvent) => e.code === "27" && toggleIsActive();
    window.addEventListener(KEY_DOWN_EVENT, keyboardListener);

    return () => {
      window.removeEventListener(KEY_DOWN_EVENT, keyboardListener);
    };
  }, []);

  return (
    <div className="select-container">
      <select
        ref={selectRef}
        className={"select" + (sizeModificator ? " " + sizeModificator : "")}
        onChange={onChange}
        onClick={() => toggleIsActive()}
        onBlur={() => closeSelect()}
      >
        {options}
      </select>

      {icon}
    </div>
  );
};

export default Select;
