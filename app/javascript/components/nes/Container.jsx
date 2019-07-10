import React from "react";

const Container = props => {
  return (
    <div
      className={`nes-container ${props.className || ""} ${props.title &&
        "with-title"}`}>
      {props.title && <p className="title">{props.title}</p>}

      {props.children}
    </div>
  );
};

export default Container;
