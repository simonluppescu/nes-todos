import React from "react";

const Button = props => {
  const { variant, className } = props;
  const classes = ["nes-btn", "nes-pointer"];
  if (variant) classes.push(`is-${variant}`);
  if (className) classes.push(className);

  return (
    <button onClick={props.onClick} type="button" className={classes.join(" ")}>
      {props.children}
    </button>
  );
};

export default Button;
