import { Container, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import FeaturedText from "../../../components/common/FeaturedText";
import BenefitCard from "./BenefitCard";
import curve1 from "../../../assets/common/backgrounds/curve-1.png";
import curve2 from "../../../assets/common/backgrounds/curve-2.png";
import polygons from "../../../assets/common/backgrounds/polygon.png";
import benefitsIcon from "../../../assets/homepage/benefits/benefits.svg";
import Fade from "../../../components/TransitionEffect/Fade";
import EarlyAccessButton from "../../../components/common/Buttons/EarlyAccessButton";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    background: `url(${polygons}) no-repeat center left  `,
    backgroundPosition:'3%',
    [theme.breakpoints.down("md")]: {
      paddingTop:theme.spacing(2)
    }
  },
  featuredText: {
    paddingTop: theme.spacing(8),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      paddingBottom: theme.spacing(6),
    },
  },
  benefitIcon: {
    marginBottom: theme.spacing(4),
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
    transform: "rotateX(15deg)",
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
  },
}));

const BenefitsSection = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <div className={classes.curves}>
          <img src={curve1} alt="" className={classes.curve1} />

          <img src={curve2} alt="" className={classes.curve2} />
        </div>
      </Hidden>

      <Container>
        <Grid container>
          <Grid item xs={12} md={4} sm={12} className={classes.featuredText}>
            <Fade direction="fade-up" anchor="top-bottom">
              <img src={benefitsIcon} alt="" className={classes.benefitIcon} />
              <FeaturedText
                title="The Early Access Benefits"
                description="Join us earlier than everyone else to gain extra honey points from our circle of professional hives! "
              />
              <div className={classes.buttonContainer}>
                <EarlyAccessButton />
              </div>
            </Fade>
          </Grid>
          <Grid item xs={12} md={8} sm={12} style={{ zIndex: 3 }}>
            <Grid container>
              {data?.map((item) => {
                const { title, description, imgSrc } = item;
                return (
                  <Grid item xs={12} md={6} sm={6} key={title}>
                    <Fade direction="fade-up">
                      <BenefitCard
                        title={title}
                        description={description}
                        imgSrc={imgSrc}
                      />
                    </Fade>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BenefitsSection;
