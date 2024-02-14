import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Fade from "../../../components/TransitionEffect/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  title: {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const BenefitCard = ({ title, description, imgSrc }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fade direction={"zoom-in"} anchor="top-bottom">
      <img
        src={imgSrc}
        alt=""
        style={{
          width: "100%",
          height: "250px",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
      </Fade>
      <Typography variant="h6" component="h3" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </div>
  );
};

export default BenefitCard;
