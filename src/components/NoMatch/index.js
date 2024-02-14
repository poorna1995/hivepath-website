import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../Seo";

const NoMatch = () => {
  return (
    <Container style={{ marginTop: "200px" }}>
      <Seo title="Page Not Found" />
      <Typography
        variant="h3"
        component="h1"
        style={{ fontWeight: "bold", marginBottom: "32px" }}
      >
        Path Not Found
      </Typography>
      <Typography style={{ marginBottom: "16px" }}>
        Sorry 😔 we couldn’t find what you were looking for.
      </Typography>
      <Typography color="textSecondary">
        <Link style={{ color: "inherit" }} to="/">
          Go Home
        </Link>
      </Typography>
    </Container>
  );
};

export default NoMatch;
