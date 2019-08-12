import React from "react";

import Button from "../nes/Button";

const EditValue = props => {
  const { value, onInputChange, onSave } = props;
  return (
    <div className="edit-value-container">
      <input
        type="text"
        name="value"
        className="nes-input"
        value={value}
        onChange={onInputChange}
        onKeyPress={event => {
          if (event.key === "Enter") {
            onSave(event);
          }
        }}
      />
      <Button variant="success" name="value" onClick={onSave}>
        Save
      </Button>
    </div>
  );
};

export default EditValue;
