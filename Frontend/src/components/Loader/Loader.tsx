import React from "react";
import "./Loader.scss";
import { classNames } from "../../utils/classNames";

interface ILoaderProps {
  disabledInterface?: boolean;
}

const Loader = ({ disabledInterface }: ILoaderProps) => {
  return <div className={classNames("loader" + (disabledInterface ? " -disabled" : ""))}></div>;
};

export default Loader;
