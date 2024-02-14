import { Container, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Fade from "../../TransitionEffect/Fade";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
}));

const FeaturedText = ({ title, description }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Fade up>
        <Typography
          color="textSecondary"
          variant="h3"
          className={classes.title}
          component="h1"
          align="center"
        >
          {" "}
          {title}
        </Typography>
        <Typography color="textPrimary" align="center" variant="body1">
          {description}
        </Typography>
      </Fade>
    </Container>
  );
};

export default FeaturedText;
