import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import JobOpeningCard from "./JobOpeningCard";
import Fade from "../../../components/TransitionEffect/Fade";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingBottom: theme.spacing(8),
  },
  title: {
    color: "white",
    marginBottom: "24px",
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    font: "normal normal normal 20px/32px Helvetica",
    letterSpacing: "0px",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      // textAlign: "left",
    },
  },
  titleContainer: {
    marginTop: theme.spacing(6),
  },
  form: {
    marginTop: theme.spacing(4),
  },
}));

const CurrentJobOpenings = ({ id, data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} id={id}>
      <Fade direction="fade-up">
        <Container className={classes.titleContainer} maxWidth="md">
          <Typography variant="h3" align="center" className={classes.title}>
            Current Openings
          </Typography>
          <Typography className={classes.description}>
            Growing quickly but we hire selectively. We are always on the
            lookout for brilliant, kind peple to join us - so reach out if you
            don't see the perfect role for you here.
          </Typography>
          {/* <form className={classes.form}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <InputField label="Job" fullWidth />
              </Grid>
              <Grid item xs={12} md={3}>
                <InputField label="Location" fullWidth />
              </Grid>
              <Grid item xs={12} md={3}>
                <InputField label="Filter" fullWidth />
              </Grid>
            </Grid>
          </form> */}
        </Container>
        <Container>
          <Grid container>
            {data?.length > 0 ? (
              data?.map((item) => {
                const { title, location, jobType, fileName } = item;

                return (
                  <Grid item xs={12} md={6} key={title}>
                    <Fade direction="fade-up">
                      <JobOpeningCard
                        key={title}
                        jobTitle={title}
                        location={location}
                        jobType={jobType}
                        fileName={fileName}
                      />
                    </Fade>
                  </Grid>
                );
              })
            ) : (
              <Typography variant="h3">No results Found</Typography>
            )}
          </Grid>
        </Container>
      </Fade>
    </div>
  );
};

export default CurrentJobOpenings;
