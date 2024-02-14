import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h2",
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: "h3" } },
    h3: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
        style: { fontWeight: "bold" },
        component: "h2",
      },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h5",
        paragraph: true,
        color: "textSecondary",
        component: "h4",
      },
    },

    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link, props: { color: "white" } },
    li: {
      props: { style: { fontSize: "1rem" } },
    },
  },
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
