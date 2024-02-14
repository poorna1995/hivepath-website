import React from "react";
import { makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";

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

const FooterNavSectionLinks = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {data?.map((link) => (
        <Link to={link.url} className={classes.link}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default FooterNavSectionLinks;
