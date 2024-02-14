import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "transparent linear-gradient(90deg, #4669b2 0%, #5985c4 100%) 0% 0%  no-repeat padding-box",
    height: "48px",
    width: "134px",
    textTransform: "initial",

    "&:hover": {
      background: "transparent",
      border: "1px solid white",
    },
  },
}));

const PrimaryButton = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} {...props}>
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
