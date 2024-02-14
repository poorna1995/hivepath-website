import React from "react";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import SubscribeUs from "../../components/Footer/SubscribeUs";
import DefaultNavBar from "../../components/Navigation/DefaultNavBar";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
  },
}));

const DefaultLayout = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Seo title={title} />
      <DefaultNavBar />
      <div style={{ paddingBottom: "128px" }}>{children}</div>
      <div style={{ paddingBottom: "128px" }}>
        <SubscribeUs isArrow />
      </div>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
