import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  card: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
}));
const PerksCard = ({ icon: Icon, title, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          {Icon && (
            <Typography align="center" variant="h2">
              <Icon />
            </Typography>
          )}
          {title && (
            <Typography variant="h5" align="center" className={classes.title}>
              {title}{" "}
            </Typography>
          )}
          {description && (
            <Typography variant="body2" align="center">
              {description}
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PerksCard;

//
