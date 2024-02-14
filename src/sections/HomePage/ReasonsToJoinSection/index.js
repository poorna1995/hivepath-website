import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import FeaturedText from "../../../components/common/FeaturedText";
import Fade from "../../../components/TransitionEffect/Fade";
import ReasonCard from "./ReasonCard";
import benefitsBg from "../../../assets/homepage/benefits-bg.png";
import "./styles.css";
import hexagon from "../../../assets/common/backgrounds/polygon.png";
import lineWhite from "../../../assets/homepage/line-white.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: `url(${lineWhite}) fixed left center no-repeat,url(${benefitsBg}) fixed top no-repeat,  transparent linear-gradient(180deg, #121212 0%, #12121200 100%) 0% 0% no-repeat `,
    
  },
  title: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  titleContainer: {
    paddingBottom: theme.spacing(4),
  },
  hexagon: {
    position: "absolute",
    background: `url(${hexagon}) fixed right no-repeat`,
    height: "100%",
    width: "100%",
    right: "1%",
  },
}));

const ReasonsToJoinSection = ({ data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.hexagon} />

      <Container maxWidth="md" className={classes.titleContainer}>
        <FeaturedText title="Use the Hive Network to Gain " />
      </Container>
      <Container className={classes.cardContainer}>
        <Fade direction="fade-up">
          <Grid container>
            <ul id="cards">
              {data?.map((item) => {
                const { title, description, id, image, style } = item;
                return (
                  <li className="card" id={id} key={id}>
                    <div className="card__content">
                      <ReasonCard
                        title={title}
                        description={description}
                        image={image}
                        style={style}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
};

export default ReasonsToJoinSection;
