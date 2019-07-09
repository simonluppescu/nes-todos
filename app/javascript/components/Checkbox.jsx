import React from "react";

const Checkbox = props => {
  return (
    <input
      type="checkbox"
      className="nes-checkbox"
      checked={props.isChecked}
      onChange={props.onChange}
    />
  );
};

export default Checkbox;
