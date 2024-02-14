import { Divider, Drawer, makeStyles } from "@material-ui/core";
import React from "react";
import SocialLinks from "../../Footer/SocialLinks";
import NavDrawerHeader from "./NavDrawerHeader";
import NavDrawerList from "./NavDrawerList";

const drawerWidth = "100%";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    color: "white",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  socialLinks: {
    alignSelf: "center",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(1),
  },
}));

const NavDrawer = ({ open, handleClick }) => {
  const classes = useStyles();
  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="top"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={handleClick}
      >
        <NavDrawerHeader handleClick={handleClick} />

        <NavDrawerList data={data} />
        <Divider />
        <div className={classes.socialLinks}>
          <SocialLinks />
        </div>
      </Drawer>
    </div>
  );
};

export default NavDrawer;

const data = [
  {
    url: "/how-it-works",
    title: "How it Works",
  },
  {
    url: "/blogs",
    title: "Blogs",
  },
];
