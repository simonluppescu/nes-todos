import React from "react";

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={`nes-btn is-${props.variant}`}>
      {props.children}
    </button>
  );
};

export default Button;
