import { Container, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import FeaturedText from "../../../components/common/FeaturedText";
import Fade from "../../../components/TransitionEffect/Fade";
import PerksCard from "./PerksCard";
import curve1 from "../../../assets/common/backgrounds/curve-1.png";
import curve2 from "../../../assets/common/backgrounds/curve-2.png";
import { MdWork } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    position: "relative",
  },
  curves: {
    height: "100%",
    width: "100%",
  },
  curve1: {
    height: "100%",
    width: "50%",
    position: "absolute",
    right: "-20%",
  },
  curve2: {
    height: "100%",
    width: "50%",
    position: "absolute",
    right: "-20%",
  },
  grid: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
}));

const PerksAndBenefits = () => {
  const classes = useStyles();
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <Container className={classes.root}>
      <Hidden only={["xs", "sm"]}>
        <div className={classes.curves}>
          <img src={curve1} alt="" className={classes.curve1} />

          <img src={curve2} alt="" className={classes.curve2} />
        </div>
      </Hidden>
      <FeaturedText title="Perks and Benefits" />
      <Grid container className={classes.grid}>
        {data.map((item) => (
          <Grid item xs={12} md={4} sm={6}>
            <Fade direction="fade-up">
              {" "}
              <PerksCard
                key={item}
                description="  Hivepath team members are working remotely while balancing needs of
              their families. Our candidates are very important to us, and we look
              forward to staying connected.
              "
                title=" Flexible Remote Work"
                icon={MdWork}
              />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PerksAndBenefits;
