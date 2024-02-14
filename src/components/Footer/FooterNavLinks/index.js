import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
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
const FooterNavLinks = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {data?.map((link) => {
        const { outLink, title, url } = link;
        return outLink ? (
          <Link to={url} className={classes.link} key={title}>
            <Typography variant="subtitle1">{link.title}</Typography>
          </Link>
        ) : (
          <a href={url} className={classes.link} key={title}>
            <Typography variant="subtitle1">{title}</Typography>
          </a>
        );
      })}
    </div>
  );
};

export default FooterNavLinks;
