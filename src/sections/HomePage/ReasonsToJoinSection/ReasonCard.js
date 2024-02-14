import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
// import cardImage from "../../../assets/homepage/benefits/Incentives.png";

// const cardheight = "500px";
const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(2),
    // padding: theme.spacing(1),
    boxShadow: "0px -2px 5px -1px rgb(0 0 0 / 70%)",
  },
  card: {
    textAlign: "center",
    position: "relative",
    width: "100%",
    // minHeight: "500px",
    borderRadius: "16px",
    transition: ".2s",

    background: theme.palette.background.paper,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    // boxShadow: "1rem 1rem 3rem #000",
  },
  cardTitle: {
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    fontSize: "2rem",
  },
  cardDescription: {
    fontSize: "1.2rem",
  },
}));

const ReasonCard = ({ title, description, image, style }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.card}>
        <Container>
          <Typography variant="h4" className={classes.cardTitle}>
            {title}
          </Typography>
          <Container
            maxWidth="sm"
            style={{ marginTop: "8px", marginBottom: "16px" }}
          >
            <Typography variant="body1" className={classes.cardDescription}>
              {description}{" "}
            </Typography>
          </Container>
        </Container>
        {image && (
          <Container
            maxWidth="sm"
            style={{ paddingBottom: "16px", paddingTop: "16px" }}
          >
            <img
              style={
                style || {
                  width: "100%",
                  maxHeight: "250px",
                  marginBottom: "16px",
                  objectFit: "contain",
                }
              }
              src={image}
              alt=""
            />
          </Container>
        )}
      </Container>
    </div>
  );
};

export default ReasonCard;
