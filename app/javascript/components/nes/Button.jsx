import React from "react";

const Button = props => {
  return (
    <button type="button" className={`nes-btn is-${props.variant}`}>
      {props.children}
    </button>
  );
};

export default Button;
