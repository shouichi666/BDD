import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import InputContents from "./components/InputContents";
import Random from "./components/Random";
import Favorite from "./components/Favorite";
import Nav from "./components/Nav";
import ViewList from "./components/ViewList";
import ItemTemplate from "./components/ItemTemplate";

const App = () => {
  //state
  const [loading, unLoading] = useState(true);
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
  const [localData, setLocalData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [favorite, notFavorite] = useState(false);

  //function
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
      .then((result) => {
        fetchSetData(result);
        unLoading(false);
      })
      .catch((error) => window.alert("error"));
  };

  // 1:お気に入りリストの判定
  // 2:localDataとitemTemplateのidを比較しbloomの反転をする。
  // 3:classNameの付け替え
  const judgmentFavorite = () => {
    notFavorite(true);
  };

  const onClickItem = (e) => {
    const id = e.target.id;
    const urlID = `https://api.punkapi.com/v2/beers/${id}`;

    const fetchSetItem = (result) => {
      selectItem(result);
      window.scrollTo(0, 0);
    };

    fetch(urlID)
      .then((res) => res.json())
      .then((result) => {
        fetchSetItem(result);
      });
  };

  const onClickAtFavorite = (e) => {
    let id = e.target.id;
    let indexNum;
    for (let i = 0; i < localData.length; i++) {
      if (localData[i]["id"] === Number(id)) {
        indexNum = i;
      }
    }
    let newItem = localData[indexNum];
    selectItem([newItem]);
  };

  const deletFavoriteData = () => {
    localStorage.clear();
    setLocalData([]);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pushLocalStorage = () => {
    if (favorite) {
      localStorage.removeItem(item[0].id);
      notFavorite(false);
    } else {
      localStorage.setItem(item[0].id, JSON.stringify(item[0]));
      notFavorite(true);
    }
  };

  // judgmentFavorite();
  useEffect(() => {
    let op = [];

    for (let i = 0; i < localStorage.length; i++) {
      let appState = localStorage.key(i);
      op.push(JSON.parse(localStorage.getItem(appState)));
    }
    setLocalData(localData.concat(op));
    // unLoading(true);
  }, []);

  return (
    <div>
      <HashRouter>
        {/* <Switch> */}
        <Route exact path="/">
          <InputContents
            name={name}
            abv={abv}
            ibu={ibu}
            hop={hop}
            molt={molt}
            item={item}
            res={res}
            handleChange={handleChange}
            setAbv={setAbv}
            setIbu={setIbu}
            handleChangeHops={handleChangeHops}
            handleChangeMolt={handleChangeMolt}
            serchItems={serchItems}
            onClickItem={onClickItem}
          />
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
            loading={loading}
          />
        </Route>

        <Route path="/item/">
          <ItemTemplate
            localData={localData}
            item={item}
            favorite={favorite}
            pushLocalStorage={pushLocalStorage}
            judgmentFavorite={judgmentFavorite}
          />
        </Route>

        <Route path="/random">
          <Random pushLocalStorage={pushLocalStorage} />
        </Route>

        <Route path="/favorite">
          <Favorite
            open={open}
            localData={localData}
            onClick={onClickAtFavorite}
            deletFavoriteData={deletFavoriteData}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </Route>

        <Nav />
        {/* </Switch> */}
      </HashRouter>
    </div>
  );
};

export default App;
