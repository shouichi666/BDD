import React from "react";
import bottle from "../img/bottle.png";

const ViewBox = (props) => {
  return (
    <li
      className="ViewBox"
      key={props.key}
      id={props.id}
      onClick={props.onClick}
    >
      <div className="ViewBox__left">
        <img src={props.img === null? bottle: props.img} alt={props.name}/>
      </div>
      <div className="ViewBox__right">
        <p>NAME : {props.name}</p>
        <p>TAGLINE : {props.tag}</p>
        <p>ABV : {props.abv}%</p>
        <p>IBU : {props.ibu}</p>
      </div>
    </li>
  );
};

export default ViewBox;
