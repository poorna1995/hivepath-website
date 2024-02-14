import { Container, Grid } from "@material-ui/core";
import React from "react";
import FeaturedText from "../../../components/common/FeaturedText";
import OurUsersCard from "./OurUsersCard";
import Fade from "../../../components/TransitionEffect/Fade";

const OurUsersSection = ({ data }) => {
  return (
    <Container style={{ marginTop: "64px" }}>
      <FeaturedText title="A World of Professional Networking Open for " />

      <Grid container style={{ marginTop: "64px", marginBottom: "64px" }}>
        {data?.map((item) => {
          const { icon, title, description } = item;
          return (
            <Grid item xs={12} md={4} sm={6} key={title}>
              <Fade direction="fade-up">
                <OurUsersCard
                  icon={icon}
                  title={title}
                  description={description}
                />
              </Fade>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default OurUsersSection;
