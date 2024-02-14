import React from "react";
import { Card, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  card: {
    padding: theme.spacing(2),
    borderRadius: "10px",
    minHeight: "180px",
    height: "100%",
  },
  grid: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "felx-start",
    height: "100%",
  },
  title: {
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    color: theme.palette.text.secondary,
  },

  icon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  iconContainer: {
    // padding: theme.spacing(2),

    alignSelf: "flex-start",
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(2),
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  },
  description: {
    fontSize: "0.92rem",
  },
}));

const OurUsersCard = ({ icon: Icon, title, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container className={classes.grid}>
          <Grid item xs={3} className={classes.iconContainer}>
            <Icon className={classes.icon} />
          </Grid>
          <Grid item xs={9} className={classes.textContainer}>
            <Typography variant="h5" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body2" className={classes.description}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default OurUsersCard;
