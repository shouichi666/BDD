import React, { useState, useEffect } from "react";
import RandomTemplate from "./RandomTemplate";
// import { Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Random = (props) => {
  const [random, setRandom] = useState([]);
  const [view, setView] = useState(false);

  useEffect(() => {
    if (view === false) {
      fetch("https://api.punkapi.com/v2/beers/random")
        .then((res) => res.json())
        .then((json) => {
          setRandom(json[0]);
          setView(true);
        });
    }
  });

  if (view === false) {
    return <p>loading</p>;
  } else {
    return (
      <>
        <RandomTemplate view={view} random={random} />
        {/* <ItemTemplate item={random} /> */}
      </>
    );
  }
};

export default Random;
