import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import FeaturedText from "../../../components/common/FeaturedText";
import Fade from "../../../components/TransitionEffect/Fade";

import problemsBg from "../../../assets/homepage/problem-background.png";

import ProductFeatureCard from "./ProductFeatureCard";
import hexagon from "../../../assets/common/backgrounds/polygon.png";
import lineWhite from "../../../assets/homepage/line-white.png";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    zIndex: 1,
    background: `url(${lineWhite}) left no-repeat,url(${problemsBg}) fixed top no-repeat, transparent linear-gradient(180deg, #121212 0%, #12121200 100%) 0% 0% no-repeat`,
  },
  title: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    // marginBottom: theme.spacing(8),
    // position:'sticky',
  },
  sliderContainer: {
    paddingLeft: "128px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(1),
    },
  },
  cardList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4rem",
  },
  hexagon: {
    position: "absolute",
    background: `url(${hexagon}) right no-repeat`,
    height: "100%",
    width: "100%",
    right: "1%",
  },
}));

const ProductFeaturesSection = ({ data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.hexagon} />

      <Container maxWidth="md" className={classes.title}>
        <FeaturedText
          title="One Platform, Endless Potential!"
          description="An all-in-one knowledge-sharing platform to bring you closer to your professional goals super-fast."
        />
      </Container>

      <Container>
        <Grid container>
          {data?.map((item) => {
            const { description, id, icon, title, direction } = item;
            return (
              <Grid item xs={12} md={6} key={id}>
                <Fade direction={direction}>
                  <ProductFeatureCard
                    icon={icon}
                    description={description}
                    title={title}
                  />
                </Fade>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      {/* <DefaultSlider data={problemsAndSolutionsData} /> */}
    </Box>
  );
};

export default ProductFeaturesSection;
