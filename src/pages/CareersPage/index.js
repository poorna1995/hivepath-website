import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import CurrentJobOpenings from "../../sections/Careers/CurrentJobOpenings";
import bannerImage from "../../assets/careers/head.webp";
import PrimaryButton from "../../components/common/Buttons/PrimaryButton";
import ContactUsLayout from "../../Layouts/ContactUsLayout";
import { jobsData } from "../../data/careers/jobsData";
const useStyles = makeStyles((theme) => ({
  hero: {
    width: "100%",
    position: "relative",
    maxHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
    },
  },
  gradient: {
    background:
      "transparent linear-gradient(270deg, #00000000 0%, #000000C3 100%) 0% 0% no-repeat padding-box",
    zIndex: "1",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  heroContent: {
    position: "absolute",
    top: "40%",
    left: "15%",
    color: "white",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      top: "25%",
      left: "5%",
    },
  },
  desc: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      fontWeight: "400",
    },
  },
}));

const CareersPage = () => {
  const classes = useStyles();

  return (
    <ContactUsLayout title="Join Us - Careers at Hivepath">
      <Box className={classes.hero}>
        <div className={classes.gradient}></div>

        <img
          src={bannerImage}
          alt=""
          style={{
            maxHeight: "100vh",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Container maxWidth="sm" className={classes.heroContent}>
          <Typography
            variant="h3"
            style={{ marginBottom: "24px", fontWeight: "bold" }}
          >
            Join Our Team
          </Typography>
          <Typography
            className={classes.desc}
            variant="h5"
            style={{ marginBottom: "24px", fontWeight: "bold" }}
          >
            Effective way of connecting and achieving your goals
          </Typography>
          <PrimaryButton
            style={{
              width: "200px",
              height: "40px",
            }}
            component="a"
            href="#job-openings"
          >
            Job Openings
          </PrimaryButton>
        </Container>
      </Box>
      {/* <PerksAndBenefits /> */}
      <CurrentJobOpenings id="job-openings" data={jobsData} />
    </ContactUsLayout>
  );
};

export default CareersPage;
