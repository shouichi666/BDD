import React from "react";
import ViewBox from "./ViewBox";
import ComfirmationModal from "./ComfirmationModal";

const Favorite = (props) => {
  let localData = props.localData;

  const MaplocalData = localData.map((data, index) => {
    return (
      <ViewBox
        key={index}
        id={data.id}
        name={data.name}
        abv={data.abv}
        ibu={data.ibu}
        img={data.image_url}
        tag={data.tagline}
        onClick={props.onClick}
      />
    );
  });

  return (
    <div className="View">
      <div className="View__deleteButton" >
        <ComfirmationModal
          open={props.open}
          onClick={props.deletFavoriteData}
          handleOpen={props.handleOpen}
          handleClose={props.handleClose}
        />
      </div>
      <h1>Favorite List</h1>
      <ul className="ViewList">{MaplocalData}</ul>
    </div>
  );
};

export default Favorite;
