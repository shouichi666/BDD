import React from "react";
import AbvSlider from "./AbvSlider";
import IbuSlider from "./IbuSlider";
import SearchName from "./SearchName";
import SelectHop from "./SelectHop";
import SelectMolt from "./SelectMolt";

const Search = (props) => {
  return (
    <div className="Search">
    <section className="card">
      <SearchName onChange={props.handleChange} name={props.name} />
    </section>
    <section className="card">
      <AbvSlider onChange={props.setAbv} value={props.abv} />
    </section>
    <section className="card">
      <IbuSlider onChange={props.setIbu} ibu={props.ibu} />
    </section>
    <section className="card">
      <SelectHop onChange={props.handleChangeHops} hop={props.hop.hop} />
    </section>
    <section className="card">
      <SelectMolt onChange={props.handleChangeMolt} molt={props.molt.molt} />
    </section>

    <button className="nomalButton btn-gradient-simple" onClick={props.serchItems}>
      SERCH
    </button>
  </div>
)
}


export default Search