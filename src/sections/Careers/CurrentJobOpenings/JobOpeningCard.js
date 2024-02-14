import {
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./cardStyles.module.css";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderRadius: "15px",
    // background: "#1D1D1F 0% 0% no-repeat padding-box",
    textAlign: "left",
    font: "normal normal normal 24px/29px Inter",
    letterSpacing: "0px",
    color: "#FFFFFF",

    transformOrigin: "left center",
    position: "relative",
    zIndex: 2,
    // transition: 'all 0.5s ease 0s',
  },
  content: {
    color: "#FFFFFF",
  },
}));

const JobOpeningCard = ({ jobTitle, location, jobType, fileName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={styles.card}>
        <Link to={`/careers/${fileName}`} target="_blank">
          <CardContent style={{ zIndex: 2 }} className={classes.content}>
            <Typography variant="h5" style={{ marginBottom: "16px" }}>
              {jobTitle}
            </Typography>
            <Divider
              style={{
                color: "white",
                background: "white",
                opacity: 0.5,
              }}
            />
            <Grid container style={{ marginTop: "16px" }}>
              <Grid item xs={6}>
                <Typography variant="subtitle2">
                  Job Type - {jobType}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" style={{alignItems:'center',
                display:'flex'
                }}>
                  <FaMapMarkerAlt style={{marginRight:'4px'}}/> {location}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Link>
      </div>
    </div>
  );
};

export default JobOpeningCard;
