import { Container } from "@material-ui/core";
import React from "react";
import BlogsLayout from "../../Layouts/BlogsLayout";
import ScrollableTabs from "../../components/Tabs/ScrollTabs";
import { blogPostsData } from "../../data/blogs/blogPostsData";
import BlogsList from "../../sections/Blogs/BlogsList";

const BlogsPage = () => {
  return (
    <BlogsLayout title="Blogs by team hivepath">
      <Container style={{ paddingTop: "80px" }}>
        <div style={{ paddingBottom: "32px" }}>
          <ScrollableTabs tabData={tabData} tabPanelData={tabData} />
        </div>
      </Container>
    </BlogsLayout>
  );
};

export default BlogsPage;

const tabData = [
  {
    id: 0,
    label: "All",
    component: <BlogsList data={blogPostsData} />,
  },
  {
    id: 1,
    label: "Networking",
    component: <BlogsList data={blogPostsData} category="networking" />,
  },
];
