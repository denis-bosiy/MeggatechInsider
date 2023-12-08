import React from "react";
import Select, { MultiValue , StylesConfig} from "react-select";

interface IMultiselectProps {
  options: MultiValue<any>;
  onValueChange: (newValue: MultiValue<any>) => void;
  defaultValue?: MultiValue<any>;
}

const customStyles: StylesConfig<true> = {
  multiValue: (styles) => {
    return {
      ...styles,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      padding: "3.5px 25px 3.5px 10px",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#4a525a",
      backgroundColor: "#fff",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 1px 4px 0 rgb(0 0 0 / 25%)",
      boxSizing: "border-box",
      outline: "none",
      
      ":active": {
        ...styles[":active"],
        backgroundColor: "#e8ebee"
      },
      ":focus": {
        ...styles[":focus"],
        backgroundColor: "#e8ebee"
      },
      ":hover": {
        ...styles[":hover"],
        backgroundColor: "#f2f4f6"
      },
    };
  },
};

const Multiselect = (props: IMultiselectProps) => {
  return (
    <div className="multiselect-container">
      <Select
        defaultValue={props.defaultValue}
        options={props.options}
        isMulti
        closeMenuOnSelect={false}
        onChange={props.onValueChange} 
        placeholder="Начните вводить/Выберите несколько" 
        styles={customStyles}      
      />
    </div>
  );
};

export default Multiselect;
