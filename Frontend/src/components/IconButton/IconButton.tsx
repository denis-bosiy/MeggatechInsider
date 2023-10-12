import React from "react";

import "./IconButton.scss";
import { classNames } from "../../utils/classNames";

interface Props {
  icon: React.ReactNode;
  small?: boolean;
  type?: "primary" | "secondary";
  onClick?: () => void;
}

export const IconButton = ({ icon, type, small, onClick }: Props) => {
  // TODO: Если размеров будет много - оставить пропс size, иначе создать пропс minimized?: boolean
  return (
    <button className={classNames("icon-button", small && "small", type)} onClick={onClick}>
      {icon}
    </button>
  );
};
