/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Container,
  Fab,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaShare,
  FaTwitter,
} from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import BlogsLayout from "../../../Layouts/BlogsLayout";
import Markdown from "../../../components/Markdown";
import { ReactComponent as HivepathLogo } from "../../../assets/logo/logo.svg";
import { Link, useParams } from "react-router-dom";
import { blogPostsData } from "../../../data/blogs/blogPostsData";
const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  socialLinks: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  icon: {
    fontSize: "20px",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(2),
    },
  },
  fab: {
    // background:theme.palette.text.secondary,
    background: theme.palette.background.default,
    border: "1px solid white",
    color: "white",
    "&:hover": {
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
    "& > span > span": {
      display: "none",
    },
    "&:hover >span > span": {
      display: "flex",
      marginLeft: theme.spacing(1),
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  fabContainer: {
    position: "fixed",
    bottom: "20px",
    display: "flex",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    left: "2%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  hidden: {
    display: "none",
  },
  share: {
    position: "fixed",
    // top: "10%",

    right: "20%",
    [theme.breakpoints.down("md")]: {
      position: "static",
      right: "0%",
    },
  },
}));

const BlogTemplate = (props) => {
  const classes = useStyles();
  const [post, setPost] = useState("");

  const { fileName } = useParams();

  const [postTitle, setPostTitle] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [postPublishDate, setPostPublishDate] = useState("");
  const [postImageSrc, setPostImageSrc] = useState("");
  const [prevPost, setPrevPost] = useState("");
  const [nextPost, setNextPost] = useState("");

  // for Loading Markdown Files
  useEffect(() => {
    import(`../../../content/blogs/${fileName}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) =>
            // console.log(res)
            setPost(res)
          )
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
  // For Observing Intersection
  useEffect(() => {
    let socialSidebar = document.getElementById("socialSidebar");
    let fabContainer = document.getElementById("fabContainer");
    let footer = document.getElementById("footer");

    function handler(entries, observer) {
      for (let entry of entries) {
        // console.log(entry);

        if (entry.isIntersecting) {
          fabContainer.style.display = "none";
          socialSidebar.style.top = "20%";
        } else {
          fabContainer.style.display = "flex";

          socialSidebar.style.top = "";
        }
      }
    }

    /* By default, invokes the handler whenever:
       1. Any part of the target enters the viewport
       2. The last part of the target leaves the viewport */

    let observer = new IntersectionObserver(handler);
    observer.observe(footer);
  });

  // For displaying data
  useEffect(() => {
    const result = blogPostsData.filter((item) => item.fileName === fileName);

    // function to set prevLink
    //disable link when it is first item
    const prev = blogPostsData.filter((item, index, elements) => {
      if (item?.fileName === fileName && index > 0) {
        let prevItem = elements[index - 1];

        setPrevPost(prevItem.fileName);
      }
      return null;
    });
    // function to set nextLink
    // disable link when it is last item
    const next = blogPostsData.filter((item, index, elements) => {
      if (item?.fileName === fileName && blogPostsData.length - 1 > index) {
        let nextItem = elements[index + 1];

        setNextPost(nextItem.fileName);
      }
      return null;
    });

    console.log(prevPost);
    const blogPost = result[0];
    setPostTitle(blogPost.title);
    setPostCategory(blogPost.category);
    setPostImageSrc(blogPost.imageSrc);
    setPostPublishDate(blogPost.date);
  }, [fileName]);

  return (
    <BlogsLayout title={postTitle}>
      <Container style={{ paddingTop: "80px" }}>
        <Container style={{ display: "flex", alignItems: "center" }}>
          {postCategory && (
            <Button
              variant="outlined"
              style={{ textTransform: "capitalize", marginRight: "16px" }}
            >
              {postCategory}
            </Button>
          )}
          {postPublishDate && (
            <Typography variant="subtitle1">
              Published on {postPublishDate}
            </Typography>
          )}
        </Container>
        <Grid container>
          <Grid item xs={12} md={9}>
            <Container style={{ marginTop: "16px", marginBottom: "16px" }}>
              <Typography
                variant="h3"
                component="h1"
                style={{ fontWeight: "bold", marginBottom: "16px" }}
              >
                {postTitle}
              </Typography>
              <div>
                <HivepathLogo style={{ width: "100px", height: "30px" }} />
              </div>
            </Container>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={9}>
            <Container>
              {postImageSrc && (
                <div style={{ paddingBottom: "32px" }}>
                  <img
                    src={postImageSrc}
                    alt=""
                    style={{ width: "100%", objectFit: "contain" }}
                  />
                </div>
              )}
              <Markdown>{post}</Markdown>
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            className={classes.share}
            id="socialSidebar"
          >
            <Container>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                Share
              </Typography>
              <div className={classes.socialLinks}>
                {icons.map((item) => {
                  const { icon: Icon } = item;
                  return <Icon className={classes.icon} key={Icon} />;
                })}
              </div>
            </Container>
          </Grid>
        </Grid>
        {/* Fab Next, previous , blogs page links */}
        <Grid container>
          <Grid item xs={12} md={9}>
            <Container id="fabContainer" className={classes.fabContainer}>
              {prevPost && (
                <Fab
                  component={Link}
                  to={`/blogs/${prevPost}`}
                  variant="extended"
                  className={classes.fab}
                >
                  <FaChevronLeft className={classes.fabIcon} />
                  <span>Previous</span>
                </Fab>
              )}
              <Fab
                variant="extended"
                aria-label="add"
                to="/blogs"
                component={Link}
                style={{ background: "#4469B2" }}
                className={classes.fab}
              >
                <IoGridSharp className={classes.fabIcon} />
                <span> Blogs</span>
              </Fab>
              {nextPost && (
                <Fab
                  variant="extended"
                  component={Link}
                  to={`/blogs/${nextPost}`}
                  className={classes.fab}
                >
                  <span style={{ marginLeft: "0px", marginRight: "8px" }}>
                    {" "}
                    Next
                  </span>

                  <FaChevronRight className={classes.fabIcon} />
                </Fab>
              )}
            </Container>
          </Grid>
        </Grid>
      </Container>
    </BlogsLayout>
  );
};

export default BlogTemplate;

const icons = [
  {
    icon: FaInstagram,
  },
  {
    icon: FaTwitter,
  },
  {
    icon: FaLinkedin,
  },
  {
    icon: FaFacebookF,
  },
  {
    icon: FaShare,
  },
];
