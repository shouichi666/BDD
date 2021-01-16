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

let marks = [];
for (let i = 0; i <= 160; i += 20) {
  let obj = {
    value: i,
    label: `${i}`,
  };
  marks.push(obj);
}

function valuetext(value) {
  return value;
}

const IbuSlider = (props) => {
  const classes = useStyles();

  const judg = (value) => {
    if (value === 0) {
      return "none";
    } else if (1 < value && value <= 5) {
      return "フルーティー";
    } else if (5 < value && value <= 20) {
      return "軽め";
    } else if (20 < value && value <= 40) {
      return "普通";
    } else if (40 < value && value <= 100) {
      return "苦め";
    } else if (100 < value && value <= 140) {
      return "苦い";
    } else if (140 < value) {
      return "マニア向け";
    } else if (value === 0) {
      return "検索なし";
    }
  };

  return (
    <div className={classes.root}>
      {valuetext()}
      <Typography id="discrete-slider-custom" gutterBottom>
        IBU {props.ibu} {judg(props.ibu)}
      </Typography>
      <Slider
        value={props.ibu}
        onChange={props.onChange}
        getAriaValueText={valuetext}
        aria-valuemax={150}
        aria-labelledby="discrete-slider-custom"
        step={5}
        min={0}
        max={160}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
};

export default IbuSlider;
