import { Container, IconButton, makeStyles, MenuItem } from "@material-ui/core";
import React from "react";
import { MdClose } from "react-icons/md";

import { ReactComponent as HivepathLogo } from "../../../assets/logo/logo.svg";
const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    // justifyContent: "flex-start",
  },
  button: {
    marginRight: theme.spacing(2),
  },
  icon: {
    width: "150px",
    height: "40px",
  },
}));

const NavDrawerHeader = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <Container className={classes.drawerHeader}>
      <MenuItem href="/" component="a" className={classes.icon}>
        <HivepathLogo />
      </MenuItem>
      <IconButton onClick={handleClick} className={classes.button}>
        <MdClose />
      </IconButton>
    </Container>
  );
};

export default NavDrawerHeader;
