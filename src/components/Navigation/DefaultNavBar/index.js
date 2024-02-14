import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as HivepathLogo } from "../../../assets/logo/logo.svg";
import { AppBar, Container, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { FaBars } from "react-icons/fa";
import NavDrawer from "../NavDrawer";
import HideNavBar from "./HideNavBar";
import NavMenuItem from "./NavMenuItem";
import EarlyAccessButton from "../../common/Buttons/EarlyAccessButton";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // height:'50px',
    // background: theme.palette.primary,
  },
  appbar: {
    background: "inherit",
  },
  appbarBlack: {
    background: theme.palette.background.default,
    opacity: 0.8,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    zIndex: 8,
  },
  logo: {
    opacity: 1,
    height: "50px",
    width: "200px",
    [theme.breakpoints.down("sm")]: {
      height: "36px",
      width: "150px",
    },
  },
  link: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(1),
    "&:hover": {
      background: "transparent",
      color: "#AFD7F2",
      opacity: 0.9,
    },
  },
  linksList: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  grow: {},
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  activeLink: {
    background: "transparent",
    color: "#AFD7F2  !important",
    opacity: 0.9,
  },
  signUpButton: {
    marginLeft: theme.spacing(2),
  },
}));

const DefaultNavBar = (props) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const showHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", showHeader);
    return () => {
      window.removeEventListener("scroll", showHeader);
    };
  }, []);

  return (
    <div className={classes.root}>
      <HideNavBar {...props}>
        <AppBar
          elevation={0}
          className={clsx(classes.appbar, show && classes.appbarBlack)}
        >
          <Container>
            <Toolbar className={classes.toolbar}>
              <Link to="/" className={classes.logo}>
                <HivepathLogo
                  style={{
                    color: "white",
                    height: "inherit",
                    width: "inherit",
                  }}
                />
              </Link>
              <div className={classes.grow} />
              <div className={classes.linksList}>
                <NavMenuItem
                  exact
                  component={NavLink}
                  to="/how-it-works"
                  activeClassName={classes.activeLink}
                >
                  How it Works
                </NavMenuItem>
                <NavMenuItem
                  component={NavLink}
                  exact
                  to="/blogs"
                  activeClassName={classes.activeLink}
                  title="Blogs"
                >
                  Blogs
                </NavMenuItem>
                <div className={classes.signUpButton}>
                  <EarlyAccessButton />
                </div>
              </div>
              <div className={classes.menuButton}>
                <IconButton onClick={handleDrawerOpen}>
                  <FaBars />
                </IconButton>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </HideNavBar>
      <NavDrawer
        open={open}
        // siteTitle={siteTitle}
        handleClick={handleDrawerClose}
      />
    </div>
  );
};

export default DefaultNavBar;
