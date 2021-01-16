import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 290,
    margin: "0 auto",
    "& .MuiTypography-gutterBottom": {
      margin: 0,
    },
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 5,
    label: "5%",
  },
  {
    value: 10,
    label: "10%",
  },
  {
    value: 15,
    label: "15%",
  },
  {
    value: 20,
    label: "20%",
  },
];

function valuetext(value) {
  return value;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {valuetext()}
      <Typography id="discrete-slider-custom" gutterBottom>
        ABV {props.value} %
      </Typography>
      <Slider
        value={props.value}
        onChange={props.onChange}
        getAriaValueText={valuetext}
        aria-valuemax={20}
        aria-labelledby="discrete-slider-custom"
        step={5}
        min={0}
        max={20}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
}
