import React from "react";
import "./IconButton.scss";

interface Props {
  size?: number;
  color?: string;
  icon: React.ReactNode;
}

export const IconButton = ({ icon, size = 48, color = "#000" }: Props) => {
  // TODO: Если размеров будет много - оставить пропс size, иначе создать пропс minimized?: boolean
  return (
    <button className="icon-button" style={{ width: size, height: size, fill: color }}>
      {icon}
    </button>
  );
};
