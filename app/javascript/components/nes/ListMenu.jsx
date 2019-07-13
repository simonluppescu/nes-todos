import React from "react";

const ListMenu = props => {
  return (
    <ul className="list-menu">
      {props.items.map((itemHash, index) => (
        <li key={index} className="nes-pointer" onClick={itemHash.action}>
          <span className="arrow-indicator">></span>
          {itemHash.text}
        </li>
      ))}
    </ul>
  );
};

export default ListMenu;
