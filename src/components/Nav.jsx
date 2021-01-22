import React from "react";
import { BottomNavigation } from "@material-ui/core";
import { BottomNavigationAction } from "@material-ui/core";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import ShuffleSharpIcon from "@material-ui/icons/ShuffleSharp";
import StarsSharpIcon from "@material-ui/icons/StarsSharp";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

// import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    maxWidth: "500px",
    background: "#030025",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    height: 45,
    padding: "0 0 3px 0",
    zIndex: 200,

    "& button ": {
      color: "#9d98d8",

      "& .MuiBottomNavigationAction-label ": {
        opacity: 1,
        color: "#9d98d8",
      },
    },
  },
});

const Nav = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const linkToSearch = () => {
    history.push("/search/");
  };
  const linkToRandom = () => {
    history.push("/random/");
    window.location.reload();
  };
  const linkToFavorite = () => {
    history.push("/favorite/");
  };

  return (
    <BottomNavigation
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      // showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Search"
        icon={<SearchSharpIcon />}
        onClick={linkToSearch}
      />

      <BottomNavigationAction
        label="Random"
        icon={<ShuffleSharpIcon />}
        onClick={linkToRandom}
      />

      <BottomNavigationAction
        label="Favorite"
        icon={<StarsSharpIcon />}
        onClick={linkToFavorite}
      />
    </BottomNavigation>
  );
};

export default Nav;
