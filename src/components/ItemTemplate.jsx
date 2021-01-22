import React from "react";
import backImg from "../img/bck.jpg";
import bottle from "../img/bottle.png";
import Acd from "./Acd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const backgroundStyle = {
  background: `url(${backImg})`,
  backgroundRepeat: "repeat",
};

const ItemTemplate = (props) => {
  const item = props.item[0];

  const pushLocalStorage = () => {
    // let id = e.target.id;
    localStorage.setItem(item.id, JSON.stringify(item));
  };

  if (item === undefined) {
    return (
      <div className="ItemTemplate">
        <p>fack /// ItemTemplate</p>
      </div>
    );
  } else {
    const foodPairings = item.food_pairing.map((foodPairing, index) => {
      return (
        <li className="acdItem" key={index}>
          {foodPairing}
        </li>
      );
    });
    const hops = item.ingredients.hops.map((hops, index) => {
      return (
        <li className="acdItem" key={index}>
          {hops.name}
        </li>
      );
    });

    const malt = item.ingredients.malt.map((malt, index) => {
      return (
        <li className="acdItem" key={index}>
          {malt.name}
        </li>
      );
    });

    return (
      <div className="ItemTemplate">
        <section className="ItemTemplate__top" style={backgroundStyle}>
          <img
            className="ItemTemplate__img"
            src={item.image_url === null ? bottle : item.image_url}
            alt={item.name}
          />
          <div className="ItemTemplate__abv ItemTemplate__AbvIbu">
            <span>Alchole</span>
            <p>{item.abv} %</p>
          </div>
          <div className="ItemTemplate__ibu ItemTemplate__AbvIbu">
            <span>IBU</span>
            <p>{item.ibu}</p>
          </div>
          <div className="iconBox" id={item.id} onClick={pushLocalStorage}>
            <FontAwesomeIcon icon={faBookmark} className="icon" />
          </div>
        </section>
        <section className="ItemTemplate__bottom">
          <div className="ItemTemplate__NameBox">
            <span className="ItemTemplate__head">Name</span>
            <p className="ItemTemplate__name">{item.name}</p>
            <p className="ItemTemplate__tagline">{item.tagline}</p>
          </div>
          <section className="ItemTemplate__bottom--top">
            <span className="ItemTemplate__head">description</span>
            <p className="ItemTemplate__discription">{item.description}</p>
          </section>
          {/* ItemTemplate__bottom--top */}

          <section className="ItemTemplate__bottom--bottom">
            <Acd food={foodPairings} hops={hops} malt={malt} />
          </section>
        </section>
      </div>
    );
  }
};

export default ItemTemplate;
