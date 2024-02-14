import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { ReactComponent as HivePathLogo } from "../../assets/logo/logo.svg";
import PrimaryButton from "../../components/common/Buttons/PrimaryButton";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    borderRadius: "20px",
    paddingBottom: theme.spacing(2),
    background: theme.palette.background.paper,
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  title: {
    fontWeight: 600,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  logo: {
    height: "25px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  mediaBg: {
    height: "100%",
    width: "100%",
  },
  mediaFwd: {
    padding: theme.spacing(4),
  },
  filters: {
    marginTop: theme.spacing(4),
  },
}));

const FeaturedBlog = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={12} sm={6} md={6} className={classes.mediaContainer}>
          <CardMedia
            component="img"
            alt="bg"
            className={classes.mediaBg}
            src="https://source.unsplash.com/random"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CardContent>
            <Grid container alignItems="center" className={classes.filters}>
              {/* button and date */}
              <Grid item style={{ marginRight: "8px" }}>
                <Button style={{ textTransform: "initial" }} variant="outlined">
                  {" "}
                  Networking
                </Button>
              </Grid>
              <Grid item>Published on 07 July 2021</Grid>
            </Grid>
            {/* Title and Description */}
            <Typography variant="h4" className={classes.title}>
              Lorem ipsum dolor sit amet sit amet
            </Typography>
            <Hidden only={["xs"]}>
              <Typography variant="body1" className={classes.description}>
                Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor sit amet
                sit amet Lorem ipsum dolor sit amet sit amet
              </Typography>
            </Hidden>
            <div>
              <HivePathLogo className={classes.logo} />
            </div>
            <PrimaryButton endIcon={<FaChevronRight />}>
              Read more
            </PrimaryButton>{" "}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FeaturedBlog;
