import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 290,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectMolt = (props) => {
  const classes = useStyles();


  const moltList = [
    "Maris Otter Extra Pale",
    "Caramalt",
    "Munich",
    "Propino Pale Malt",
    "Wheat Malt",
    "Propino Pale Malt for kettle souring",
    "Acidulated Malt for kettle souring",
    "Extra Pale",
    "Dark Crystal",
    "Lager Malt",
    "Wheat",
    "Chocolate",
    "Carafa Special Malt Type 3",
    "Acidulated Malt",
    "Flaked Oats",
    "Crystal",
    "Peated Malt",
    "Amber",
    "Brown",
    "Crystal 150",
    "Pale Ale",
    "Smoked Weyermann",
    "Carafa Special Malt Type 1",
    "Dark Crystal 350-400",
    "Pale Ale - Tipple",
    "Extra Pale - Spring Blend",
    "Roasted Barley",
    "Smoked Malt",
    "Crystal 120",
    "Honey",
    "Rye",
    "Pale Crystal",
    "Weyermann Beech Smoked",
    "Popcorn",
    "Pale Chocolate",
    "Torrified Wheat",
    "Smoked Peaty",
    "Dextrose",
    "Black Malt",
    "Special W",
    "Dark Crystal 350",
    "Black Patent",
  ];
  const optionMolt = moltList.map((molt, i) => {
    return (
      <option key={i} value={molt}>
        {molt}
      </option>
    );
  });


  return (
    <div className="centerBox">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Molt</InputLabel>
        <Select
          native
          value={props.molt}
          onChange={props.onChange}
          inputProps={{
            name: "molt",
            id: "age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          {optionMolt}
        </Select>
      </FormControl>
    </div>
  );
}


export default SelectMolt