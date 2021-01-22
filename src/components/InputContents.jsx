import React, { useState } from "react";
import { Route } from "react-router-dom";
import AbvSlider from "./AbvSlider";
import IbuSlider from "./IbuSlider";
import SearchName from "./SearchName";
import SelectHop from "./SelectHop";
import SelectMolt from "./SelectMolt";
import ViewList from "./ViewList";
import ItemTemplate from "./ItemTemplate";
import { useHistory } from "react-router-dom";
import "../style.css";

// import Search from "./Search";

const InputContents = (props) => {
  const history = useHistory();
  //state
  const [count, changeCount] = useState(1);
  const [name, setName] = useState("");
  const [abv, toggleAbv] = useState(5);
  const [ibu, toggleIbu] = useState(30);
  const [molt, setMolt] = useState({
    molt: "",
  });
  const [hop, setHop] = useState({
    hop: "",
  });
  const [data, setData] = useState([]);
  const [item, selectItem] = useState([]);
  const [res, noneRes] = useState(true);

  //func
  const handleChange = (event) => {
    setName(event.target.value);
    changeCount(1);
    setData([]);
  };

  const setAbv = (e, newValue) => {
    toggleAbv(newValue);
    changeCount(1);
    setData([]);
  };

  const setIbu = (e, newValue) => {
    toggleIbu(newValue);
    changeCount(1);
    setData([]);
  };

  const handleChangeHops = (event) => {
    const name = event.target.name;
    setHop({
      ...hop,
      [name]: event.target.value,
    });
    changeCount(1);
    setData([]);
  };

  const handleChangeMolt = (event) => {
    const name = event.target.name;
    console.log(name);
    setMolt({
      ...molt,
      [name]: event.target.value,
    });
    changeCount(1);
    setData([]);
  };

  const serchItems = () => {
    let NAME;
    let ABV;
    let IBU;
    let HOPS;
    let MOLT;
    name === "" ? (NAME = "") : (NAME = `&beer_name=${name}`);
    abv === 0 ? (ABV = "") : (ABV = `&abv_gt=${abv}`);
    ibu === 0 ? (IBU = "") : (IBU = `&ibu_gt=${ibu}`);
    hop.hop === "" ? (HOPS = "") : (HOPS = `&hops=${hop.hop}`);
    molt.molt === "" ? (MOLT = "") : (MOLT = `&maalt=${molt.molt}`);
    let url = `https://api.punkapi.com/v2/beers?page=${count}&per_page=80${NAME}${ABV}${IBU}${HOPS}${MOLT}`;

    const fetchSetData = (result) => {
      if (result.length > 0) {
        setData(data.concat(result));
        changeCount(count + 1);
      } else {
        noneRes(false);
        changeCount(count);
      }
    };

    fetch(url)
      .then((res) => res.json())
      .then((result) => fetchSetData(result));
    history.push("/view");
  };

  const onClickItem = (e) => {
    const id = e.target.id;
    const urlID = `https://api.punkapi.com/v2/beers/${id}`;

    const fetchSetItem = (result) => {
      selectItem(result);
      // selectItem(item.concat(result));
      history.push("/item/");
      window.scrollTo(0, 0);
    };

    fetch(urlID)
      .then((res) => res.json())
      .then((result) => fetchSetItem(result));
  };

  return (
    <>
      <Route path="/search/">
        <div className="Search">
          <section className="card">
            <SearchName onChange={handleChange} name={name} />
          </section>
          <section className="card">
            <AbvSlider onChange={setAbv} value={abv} />
          </section>
          <section className="card">
            <IbuSlider onChange={setIbu} ibu={ibu} />
          </section>
          <section className="card">
            <SelectHop onChange={handleChangeHops} hop={hop.hop} />
          </section>
          <section className="card">
            <SelectMolt onChange={handleChangeMolt} molt={molt.molt} />
          </section>

          <button
            className="nomalButton btn-gradient-simple"
            onClick={serchItems}
          >
            SERCH
          </button>
        </div>
        {/* <Search
            name={name}
            abv={abv}
            ibu={ibu}
            hop={hop}
            molt={molt}
            handleChange={handleChange}
            setAbv={setAbv}
            setIbu={setIbu}
            handleChangeHops={handleChangeHops}
            handleChangeMolt={handleChangeMolt}
            serchItems={serchItems}
          /> */}
      </Route>
      <Route path="/view/">
        <ViewList
          name={name}
          abv={abv}
          ibu={ibu}
          hop={hop}
          molt={molt}
          data={data}
          onClick={onClickItem}
          serchItems={serchItems}
          res={res}
        />
      </Route>
      <Route path="/item/">
        <ItemTemplate item={item}/>
      </Route>
    </>
  );
};

export default InputContents;
