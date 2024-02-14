import React from "react";
import polygon from "../../assets/common/backgrounds/polygon.png";
import { Box, Container, Grid, Hidden, Typography } from "@material-ui/core";
import Fade from "../TransitionEffect/Fade";
import { makeStyles } from "@material-ui/styles";
// import mediaBg from "../../assets/common/backgrounds/main-dots.png";
import hexagons from "../../assets/common/backgrounds/polygon-group.png";
import curve1 from "../../assets/common/backgrounds/curve-1.png";
import curve2 from "../../assets/common/backgrounds/curve-2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(16),
    marginBottom: theme.spacing(16),
    position: "relative",
  },
  number: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontWeight: 700,
  },
  title: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontWeight: 700,
  },
  description: {
    marginBottom: theme.spacing(2),
  },
  media: {
    position: "relative",
  },
  polygons: {
    position: "absolute",
    left: "-10%",
    background: `url(${hexagons}) left top no-repeat`,
    backgroundSize: "cover",
    height: "100%",
    overflow: "hidden",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      // left: "-25%",
      width: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "-25%",
      // width: "100px",
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

  image: {
    width: "100%",
    paddingTop: "10%",
    height: "inherit",
    objectFit: "cover",
    zIndex: 1,
  },
}));

const GridContent = ({
  id,
  imgSrc,
  reverse,
  bgPos,
  poly,
  title,
  description,
  padding,
  polygonUp,
  number,
}) => {
  const classes = useStyles();

  return (
    <Box id={id} className={classes.root}>
      <Hidden only={["sm", "xs"]}>
        <div className={classes.polygons} style={{ top: `${polygonUp}` }}></div>
        <div className={classes.curves}>
          <img src={curve1} alt="" className={classes.curve1} />

          <img src={curve2} alt="" className={classes.curve2} />
        </div>
      </Hidden>

      <Container>
        <Fade direction="fade-up">
          <Grid
            container
            style={{ flexDirection: `${reverse ? "row-reverse" : "row"}` }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Container maxWidth="sm">
                {poly && (
                  <img style={{ marginLeft: "128px" }} src={polygon} alt="" />
                )}
                <Typography variant="h4" className={classes.number}>
                  {number}
                </Typography>
                <Typography
                  variant="h4"
                  color="textSecondary"
                  className={classes.title}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={classes.description}
                >
                  {description}{" "}
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} md={6} className={classes.media}>
              <Container maxWidth="sm">
                {imgSrc && (
                  <img className={classes.image} src={imgSrc} alt="" />
                )}{" "}
              </Container>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
};

export default GridContent;
