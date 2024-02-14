import React from "react";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import DefaultNavBar from "../../components/Navigation/DefaultNavBar";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
  },
}));

const BlogsLayout = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Seo title={title} />
      <DefaultNavBar />
      <div style={{ paddingBottom: "128px" }}>{children}</div>

      <Footer />
    </Box>
  );
};

export default BlogsLayout;
