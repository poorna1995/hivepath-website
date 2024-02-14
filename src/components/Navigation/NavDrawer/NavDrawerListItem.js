import { ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  text: {
    color: theme.palette.text.primary,
  },
}));

const NavDrawerListItem = ({ url, title }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.root} component={Link} to={url}>
      <ListItemText className={classes.text}> {title}</ListItemText>
    </ListItem>
  );
};

export default NavDrawerListItem;
