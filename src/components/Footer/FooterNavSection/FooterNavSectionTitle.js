import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  link: {
    marginTop: theme.spacing(2),
    textDecoration: "none",

    color: "#bbbbbb",
    opacity: 0.9,
    "&:hover": {
      color: "#AFD7F2",
    },
  },
}));

const FooterNavSectionTitle = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography>{title}</Typography>
    </div>
  );
};

export default FooterNavSectionTitle;
