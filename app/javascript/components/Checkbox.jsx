import React from "react";

const Checkbox = props => {
  return (
    <input
      type="checkbox"
      className="nes-checkbox"
      name={props.name}
      checked={props.isChecked}
      onChange={props.onChange}
    />
  );
};

export default Checkbox;
