import React from "react";
import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ReactComponent as HivepathLogo } from "../../assets/logo/logo.svg";
import SocialLinks from "./SocialLinks";
import FooterNavLinks from "./FooterNavLinks";
import { FaEnvelope } from "react-icons/fa";
import { companyNavLinksData, productsNavLinkData } from "./data";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  socialLinks: {
    // marginLeft: "32px",
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    opacity: 1,
    height: "40px",
    width: "160px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
  aboutDesc: {
    color: "#bbbbbb",
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    maxWidth: "270px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "150px",
      marginTop: theme.spacing(0),
    },
  },
  copyright: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  contact: {
    alignSelf: "flex-start",
  },
  link: {
    display: "flex",
    alignItems: "center",
    color: "#bbbbbb",

    textDecoration: "none",
    "&:hover": {
      color: "#AFD7F2",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Container id="footer" className={classes.root}>
      <Grid container className={classes.grid}>
        <Grid item xs={6} md={3}>
          <div>
            <Link to="/" className={classes.logo}>
              <HivepathLogo style={{ height: "inherit", width: "inherit" }} />
            </Link>
          </div>
          <div className={classes.aboutDesc}>
            <Typography variant="caption">
              Redefining networking journey in all-in-one new age networking
              platform
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            variant="body2"
            style={{ fontWeight: "bold", marginTop: "12px" }}
          >
            Products
          </Typography>

          <FooterNavLinks data={productsNavLinkData} />
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography
            variant="body2"
            style={{ fontWeight: "bold", marginTop: "12px" }}
          >
            Company
          </Typography>

          <FooterNavLinks data={companyNavLinksData} />
        </Grid>
        <Grid item xs={6} md={2} className={classes.contact}>
          <Typography
            variant="body2"
            style={{ fontWeight: "bold", marginTop: "12px" }}
          >
            Contact Us
          </Typography>
          <div style={{ marginTop: "12px" }}>
            <a href="mailto:admin@hivepath.io" className={classes.link}>
              <FaEnvelope style={{ marginRight: "12px" }} />
              <Typography variant="subtitle1">admin@hivepath.io</Typography>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography
            variant="body2"
            style={{ fontWeight: "bold", marginTop: "12px" }}
          >
            Social
          </Typography>

          <SocialLinks />
        </Grid>

        <Grid item xs={12}></Grid>
      </Grid>
      <Divider
        style={{ background: "#ffffff", opacity: "0.1", height: "2px" }}
      />
      <Container className={classes.copyright}>
        <Typography
          style={{ color: "#BBBBBB" }}
          align="center"
          variant="subtitle1"
        >
          © 2021 Hivepath. All rights reserved.
        </Typography>
      </Container>
    </Container>
  );
};

export default Footer;
