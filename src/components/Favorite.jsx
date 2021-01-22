import React, { useState, useEffect } from "react";
import ViewBox from "./ViewBox";
import { useHistory } from "react-router-dom";


const Favorite = (props) => {
  const history = useHistory();
  const [localData, setLocalData] = useState([]);


  useEffect(() => {
    let op = [];
    for (let i = 0; i < localStorage.length; i++) {
      console.log(i);
      let appState = localStorage.key(i);
      op.push(JSON.parse(localStorage.getItem(appState)));
    }
    setLocalData(localData.concat(op));
  }, []);

  const onClick = () => {
    history.push("/item/")
  }

  const MaplocalData = localData.map((data, index) => {
    // return <li className="ViewBox" key={index}>{data.name}</li>;
    return (
      <ViewBox
        key={index}
        id={data.id}
        name={data.name}
        abv={data.abv}
        ibu={data.ibu}
        img={data.image_url}
        tag={data.tagline}
        onClick={onClick}
      />
    );
  });

  if (localData.length === 0) {
    return <p>None Favorite</p>;
  } else {
    return (
      <div className="View">
        <h1>Favorite List</h1>
        <ul className="ViewList">{MaplocalData}</ul>
      </div>
    );
  }
};

export default Favorite;
