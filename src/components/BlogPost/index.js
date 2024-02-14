import React, { useEffect, useState } from "react";

import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import BlogsLayout from "../../Layouts/BlogsLayout";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaShare,
  FaTwitter,
} from "react-icons/fa";

import Markdown from "../../../components/Markdown";
import { ReactComponent as HivepathLogo } from "../../../assets/logo/logo.svg";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  socialLinks: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
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
}));
const BlogPost = () => {
  const classes = useStyles();
  const file_name = "why-networking-is-important.md";
  const [post, setPost] = useState("");
  const relatedBlogs = [1, 2, 3];

  useEffect(() => {
    import(`../../../blogs/${file_name}`)
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
  return (
    <BlogsLayout title="Blog Title">
      <Container style={{ paddingTop: "128px" }}>
        <Container style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="outlined"
            style={{ textTransform: "initial", marginRight: "16px" }}
          >
            Networking
          </Button>
          <Typography variant="subtitle1">Published on 07 July 2021</Typography>
        </Container>
        <Container style={{ marginTop: "16px", marginBottom: "16px" }}>
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", marginBottom: "16px" }}
          >
            Why Is Networking Important?
          </Typography>
          <div>
            <HivepathLogo style={{ width: "160px", height: "40px" }} />
          </div>
        </Container>
        <Grid container>
          <Grid item xs={12} md={9}>
            <Container>
              <img
                src="https://source.unsplash.com/random"
                alt=""
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
              <Markdown>{post}</Markdown>
            </Container>
          </Grid>
          <Grid item xs={12} md={3}>
            <Container>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                Share
              </Typography>
              <div className={classes.socialLinks}>
                {icons.map((item) => {
                  const { icon: Icon } = item;
                  return <Icon className={classes.icon} />;
                })}
              </div>
            </Container>
          </Grid>
        </Grid>
        <Container style={{ marginTop: "16px" }}>
          <Typography variant="h5" style={{ fontweight: "bold" }}>
            Read more Articles
          </Typography>
          <Container style={{ display: "flex" }}>
            {relatedBlogs.map((item) => (
              <div
                key={item}
                style={{ width: "200px", height: "200px", padding: "8px" }}
              >
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  style={{ width: "100%", objectFit: "cover", height: "150px" }}
                />
                <Typography>Lorem ipsum dolor sit amet</Typography>
              </div>
            ))}{" "}
          </Container>
        </Container>
      </Container>
    </BlogsLayout>
  );
};

export default BlogPost;

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
