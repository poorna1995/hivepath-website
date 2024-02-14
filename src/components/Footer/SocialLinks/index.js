import { makeStyles } from "@material-ui/core";
import React from "react";
import { socialLinks } from "../data";

const useStyles = makeStyles((theme) => ({
  socialLinks: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  link: {
    marginRight: theme.spacing(2),
    textDecoration: "none",
    color: "#b9b9b9",
    "&:hover": {
      color: "#AFD7F2",
    },
  },
}));

const SocialLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.socialLinks}>
      {socialLinks.map((item) => {
        const { url, icon: Icon, color } = item;
        return (
          <a href={url} target="_blank" rel="noreferrer" className={classes.link} key={Icon}>
            <Icon style={{ color: `${color}`, fontSize: "20px" }} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
