import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title }) => {
  const description = "Enter into the world of professional hives with Hivepath, an all-in-one networking platform for a hassle-free professional journey. Connect and engage in 1-on-1 interactions and start up your career with a buzz! With our AI-powered algorithm and powerful features, find your passion turned into a clear path, all on Hivepath! "
  
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title || "Hivepath"} </title>
      <link rel="canonical" href="https://hivepath.io" />
      <meta name="og:site_name" content="Hivepath" />
    <meta name="description" content={description} />
    
    <meta property="og:url" content="https://www.hivepath.io" />
    <meta property="og:title" content={title || "Hivepath"} />
    <meta property="og:description" content={description} name="description" />
    
    </Helmet>
  );
};

export default Seo;
