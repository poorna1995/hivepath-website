import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  card: {
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    minWidth: "250px",
    // height: "300px",

    borderRadius: "16px",

    transition: ".2s",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  title: {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  },
  icon: {
    width: "70px",
    height: "70px",
  },
  solutions: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  desc: {
    marginTop: theme.spacing(2),
    fontSize: "1.2rem",
    "& > span": {
      color: theme.palette.text.secondary,
      fontWeight: "bold",
    },
  },
}));

const ProductFeatureCard = ({ icon: Icon, description, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Container className={classes.solutions}>
          {Icon && <Icon className={classes.icon} />}
          {title && (
            <Typography variant="h5" className={classes.title}>
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              variant="body1"
              className={classes.desc}
              dangerouslySetInnerHTML={{ __html: description }}
            ></Typography>
          )}
        </Container>
      </div>
    </div>
  );
};

export default ProductFeatureCard;
