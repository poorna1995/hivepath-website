import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "20px",
    // background: "transparent",
    height: "390px",
    // boxShadow: "none",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  media: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    transition: "transform 450ms ",
    // borderRadius:'20px',

    "&:hover": {
      transform: "scale(1.08)",
    },
  },
  imgWrapper: {
    overflow: "hidden",
    // borderRadius: "20px",
  },
  content: {},
  filters: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: 600,
    marginTop: "8px",
    marginBottom: "8px",
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  },
  readMoreButton: {},
}));

const DefaultBlogCard = ({
  fileName,
  category,
  author,
  date,
  title,
  description,
  imageSrc,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {imageSrc && (
        <div className={classes.imgWrapper}>
          <CardMedia
            className={classes.media}
            component="img"
            src={imageSrc}
            alt={title}
          />
        </div>
      )}

      <CardContent className={classes.content}>
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          {category && (
            <Button
              style={{ textTransform: "capitalize", marginRight: "16px" }}
              variant="outlined"
            >
              {category}
            </Button>
          )}
          {date && <Typography variant="subtitle1">{date}</Typography>}
        </Grid>
        {title && (
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" className={classes.description}>
            {description}
          </Typography>
        )}
      </CardContent>
      {/* <CardActions style={{ width: "100%", justifyContent: "flex-end" }}>
        <Button
          endIcon={<FaChevronRight />}
          style={{ textTransform: "initial", alignSelf: "flex-end" }}
        >
          Read more
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default DefaultBlogCard;
