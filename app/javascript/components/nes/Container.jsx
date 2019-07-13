import React from "react";

const Container = props => {
  const classNames = ["nes-container"];
  if (props.className) classNames.push(props.className);
  if (props.title) classNames.push("with-title");

  return (
    <div className={classNames.join(" ")}>
      {props.title && <p className="title">{props.title}</p>}

      {props.children}
    </div>
  );
};

export default Container;
