import { makeStyles } from "@material-ui/styles";
import React from "react";
import NavDrawerListItem from "./NavDrawerListItem";

const useStyles = makeStyles((theme) => ({}));
const NavDrawerList = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data.map((item) => {
        const { url, title } = item;
        return <NavDrawerListItem url={url} title={title} />;
      })}
    </div>
  );
};

export default NavDrawerList;
