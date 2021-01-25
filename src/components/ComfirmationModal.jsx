import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Deletebutton from "./DeleteButton";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "48% !important",
    left: "50% !important",
    width: "80%",
    maxWidth: "400px",
    transform: "translate(-50%,-50%) !important",
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ComfirmationModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">confirmation</h2>
      <p id="simple-modal-description">Delete all items?</p>
      <div className="flexTwo">
        <button className="approvalButton" onClick={props.onClick}>
          YES
        </button>
        <button className="cancelButton" onClick={props.handleClose}>
          NO
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={props.handleOpen}>
        <Deletebutton />
      </button>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
