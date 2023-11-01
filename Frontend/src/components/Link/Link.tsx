import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Link.scss";

export enum LinkType {
  Default = "DEFAULT",
  Light = "LIGHT",
  Important = "IMPORTANT"
}

interface ILinkProps {
  path: string;
  label: string;
  type?: LinkType;
  icon?: React.ReactNode;
}

export const Link = (props: ILinkProps) => {
  const linkType: LinkType = props.type ?? LinkType.Default;

  return (
    <RouterLink to={props.path} className={`link -${linkType.toLowerCase()}`}>
      {props.icon}
      {props.label}
    </RouterLink>
  );
};
