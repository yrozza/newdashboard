import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3  hover:drop-shadow-xl`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
