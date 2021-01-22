import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 290,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectHop = (props) => {
  const classes = useStyles();

  const hopList = [
    "Fuggles",
    "First Gold",
    "Cascade",
    "Amarillo",
    "Simcoe",
    "Motueka",
    "Bramling Cross",
    "Centennial",
    "Saaz",
    "Nelson Sauvin",
    "Peppercorns",
    "Tomahawk",
    "Magnum",
    "Hersbrucker",
    "Honey",
    "Lactose",
    "Citra",
    "Columbus Extract",
    "Columbus",
    "Willamette",
    "Galena",
    "Hop Extract",
    "Chinook",
    "Mt.Hood",
    "Challenger",
    "Waimea",
    "Ahtanum",
    "Crystal",
    "Sorachi Ace",
    "Coffee",
    "HBC 369",
    "Dana",
    "Hallertauer Mittelfrüh",
    "Kohatu",
    "Blackberry Concentrate",
    "Sour Cherry Puree",
    "Mosaic",
    "CO2 Extract",
    "Goldings",
    "Bobek",
    "Ginger",
    "Orange Peel",
    "Mandarina Bavaria",
    "Coffee Beans",
    "Pacifica",
    "Pacific Jade",
    "Vic Secret",
  ];
  const optionHops = hopList.map((hop, i) => {
    return (
      <option key={i} value={hop}>
        {hop}
      </option>
    );
  });

  return (
    <div className="centerBox">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Hops</InputLabel>
        <Select
          native
          value={props.hop}
          onChange={props.onChange}
          inputProps={{
            name: "hop",
            id: "age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          {optionHops}
        </Select>
      </FormControl>
    </div>
  );
}


export default SelectHop