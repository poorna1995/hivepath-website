import React from "react";

const HomePage = React.lazy(() => import("../pages/HomePage"));

const CareersPage = React.lazy(() => import("../pages/CareersPage/index"));
const BlogsPage = React.lazy(() => import("../pages/BlogsPage/index"));
const HowItWorksPage = React.lazy(() => import("../pages/HowItWorksPage"));
const BlogTemplatePage = React.lazy(() =>
  import("../pages/BlogsPage/BlogTemplate")
);
const ContactUsPage = React.lazy(() => import("../pages/ContactUsPage"));
const JobDescriptionPage = React.lazy(() =>
  import("../pages/CareersPage/JobDescription")
);

const appRoutes = [
  {
    path: "/careers",
    exact: true,
    name: "careers",
    component: CareersPage,
  },
  {
    path: "/",
    exact: true,
    name: "Home page",
    component: HomePage,
  },
  {
    path: "/blogs",
    exact: true,
    name: "",
    component: BlogsPage,
  },
  {
    path: "/blogs/:fileName",
    exact: true,
    name: "careers",
    component: BlogTemplatePage,
  },
  {
    path: "/how-it-works",
    exact: true,
    name: "careers",
    component: HowItWorksPage,
  },
  {
    path: "/careers/:fileName",
    exact: true,
    name: "careers",
    component: JobDescriptionPage,
  },
  {
    path: "/contact",
    exact: true,
    name: "careers",
    component: ContactUsPage,
  },
];

export default appRoutes;
