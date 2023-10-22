import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Link.scss";

interface ILinkProps {
  path: string;
  label: string;
  mode?: "light" | "dark";
}

export const Link = ({ path, label, mode }: ILinkProps) => {
  return (
    <RouterLink to={path} className={`link -${mode}`}>
      {label}
    </RouterLink>
  );
};
