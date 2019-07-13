import React from "react";

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={`nes-btn nes-pointer is-${props.variant} ${props.className || ""}`}>
      {props.children}
    </button>
  );
};

export default Button;
