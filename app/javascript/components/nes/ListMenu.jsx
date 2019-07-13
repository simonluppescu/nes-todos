import React from "react";

const ListMenu = props => {
  return (
    <ul className="list-menu">
      {props.items.map((item, index) => (
        <li key={index}>
          <span className="arrow-indicator">></span>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListMenu;
