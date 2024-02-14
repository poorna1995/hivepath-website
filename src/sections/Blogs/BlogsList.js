import { Grid } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "../../components/TransitionEffect/Fade";
import DefaultBlogCard from "./DefaultBlogCard";

const BlogsList = ({ data, category }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    if (category === "" || category === undefined) {
      setBlogPosts(data);
    } else {
      const result = data?.filter((item) => item.category === category);
      setBlogPosts(result);
    }
  }, [category, data]);
  return (
    <div>
      <Grid container spacing={2}>
        {blogPosts?.map((item) => {
          const {
            fileName,
            category,
            author,
            date,
            title,
            description,
            imageSrc,
          } = item;
          return (
            <Grid key={title} item xs={12} sm={6} md={4}>
              <Fade direction="fade-up">
                <Link to={`blogs/${fileName}`}>
                  <DefaultBlogCard
                    fileName={fileName}
                    category={category}
                    author={author}
                    date={date}
                    title={title}
                    description={description}
                    imageSrc={imageSrc}
                  />
                </Link>
              </Fade>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default BlogsList;
