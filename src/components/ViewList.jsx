import React from "react";
import ViewBox from "./ViewBox";
// import { useHistory } from "react-router-dom";

const ViewList = (props) => {
  // const history = useHistory();
  let moreButton = "ViewList__moreButton";
  props.res === true ? (moreButton += "") : (moreButton += "None");
  const items = props.data.map((item, index) => {
    let key = index;
    return (
      <ViewBox
        key={key}
        id={item.id}
        name={item.name}
        abv={item.abv}
        ibu={item.ibu}
        img={item.image_url}
        tag={item.tagline}
        onClick={props.onClick}
      />
    );
  });

  let reName, reAbv, reIbu, reHop, reMolt;
  props.name === "" ? (reName = "") : (reName = props.name);
  props.abv === "" ? (reAbv = "") : (reAbv = props.abv);
  props.ibu === "" ? (reIbu = "") : (reIbu = props.ibu);
  props.hop.hop === "" ? (reHop = "") : (reHop = props.hop.hop);
  props.molt.molt === "" ? (reMolt = "") : (reMolt = props.molt.molt);

  let className = "ViewListResult__name";
  let classAbv = "ViewListResult__abv";
  let classIbu = "ViewListResult__ibu";
  let classHop = "ViewListResult__hop";
  let classMolt = "ViewListResult__molt";
  props.name === ""
    ? (className = "ViewListResult__tagIsNone")
    : (className = "ViewListResult__name");
  props.abv === ""
    ? (classAbv = "ViewListResult__tagIsNone")
    : (classAbv = "ViewListResult__abv");
  props.ibu === ""
    ? (classIbu = "ViewListResult__tagIsNone")
    : (classIbu = "ViewListResult__ibu");
  props.hop.hop === ""
    ? (classHop = "ViewListResult__tagIsNone")
    : (classHop = "ViewListResult__hop");
  props.molt.molt === ""
    ? (classMolt = "ViewListResult__tagIsNone")
    : (classMolt = "ViewListResult__mlt");

  return (
    <div className="View">
      <div className="ViewListResult">
        <p className={`${className} ViewListResult__tag`}>{reName}</p>
        <p className={`${classAbv} ViewListResult__tag`}>{reAbv}%</p>
        <p className={`${classIbu} ViewListResult__tag`}>IBU : {reIbu}</p>
        <p className={`${classHop} ViewListResult__tag`}>{reHop}</p>
        <p className={`${classMolt} ViewListResult__tag`}>{reMolt}</p>
      </div>
      <ul className="ViewList">{items}</ul>
      <button className={moreButton} onClick={props.serchItems}>
        MORE...
      </button>
    </div>
  );
};

export default ViewList;
