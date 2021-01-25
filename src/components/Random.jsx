import React, { useState, useEffect } from "react";
import RandomTemplate from "./RandomTemplate";
import Loading from "./Loading";

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
        })
        .catch((error) => console.log("error"));
    }
  }, [view]);

  if (view === false) {
    return <Loading/>;
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
