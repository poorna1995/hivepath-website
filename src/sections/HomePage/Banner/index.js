import styles from "./Banner.module.css";
import React from "react";
import polygon from "../../../assets/common/backgrounds/polygon.png";
import { Box, Container, Grid, Hidden, Typography } from "@material-ui/core";
import Fade from "../../../components/TransitionEffect/Fade";
import { makeStyles } from "@material-ui/styles";
import hexagons from "../../../assets/common/backgrounds/polygon-group.png";
import curve1 from "../../../assets/common/backgrounds/curve-1.png";
import curve2 from "../../../assets/common/backgrounds/curve-2.png";
import EarlyAccessButton from "../../../components/common/Buttons/EarlyAccessButton";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    paddingBottom: theme.spacing(8),
    // background:`url(${homeBanner})`
  },
  banner: {
    position: "relative",
  },
  
  title: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    letterSpacing: "1.56px",
    fontWeight: "400",

    "& > span": {
      color: theme.palette.text.secondary,
      fontWeight: "bold",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
    },
  },

  image: {
    width: "100%",
    objectFit: "contain",
  },
  mediaContainer: {
    width: "100%",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  curve1: {
    height: "100%",
    width: "50%",
    position: "absolute",
    right: "-20%",
  },
  curve2: {
    height: "100%",
    width: "50%",
    position: "absolute",
    right: "-20%",
    transform: "rotateX(15deg)",
  },

  hexagons: {
    background: `url(${hexagons}) left top no-repeat`,
    position: "absolute",
    left: "-20%",
    top: "-15%",
    width: "50%",
    height: "80%",
    backgroundSize: "contain",
    overflow: "hidden",
  },
}));

const Banner = ({
  id,
  imgSrc,
  reverse,
  bgPos,
  poly,
  title,
  button,
  padding,
  polygonUp,
}) => {
  const classes = useStyles();

  return (
    <Box id={id} className={classes.root}>
      <Container className={classes.banner}>
        <Hidden only={["sm", "xs"]}>
          <div className={classes.curves}>
            <img src={curve1} alt="" className={classes.curve1} />

            <img src={curve2} alt="" className={classes.curve2} />
          </div>

          {/* <div className={styles.gradientLeft} /> */}
          {/* <div className={classes.hexagons} /> */}

          <div className={styles.gradientRight} />
        </Hidden>

        <Fade direction="fade-up">
          <Grid container alignItems="center" className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.textContainer}>
              <Container maxWidth="sm">
              {poly && (
                <img style={{ marginLeft: "128px" }} src={polygon} alt="" />
              )}
              <Typography
                variant="h3"
                color="textPrimary"
                component="h1"
                className={classes.title}
                dangerouslySetInnerHTML={{ __html: title }}
              ></Typography>
              {button && (
                <div >
                  <EarlyAccessButton />
                </div>
              )}{" "}
              </Container>
            </Grid>
            <Grid item xs={12} md={6} className={classes.mediaContainer}>
              <Container maxWidth="sm">
                {imgSrc && (
                  <img
                    className={classes.image}
                    style={{ paddingLeft: `${padding}`, zIndex: 3 }}
                    src={imgSrc}
                    alt=""
                  />
                )}{" "}
              </Container>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
};

export default Banner;
