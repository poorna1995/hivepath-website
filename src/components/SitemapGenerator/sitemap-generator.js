require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;
const blogs = require("../../data/blogs/blogs.json");
const careers = require("../../data/careers/jobsData");

function generateSitemap() {
  const pathsConfig = {
    "/blogs/:fileName": [
      {
        fileName: blogs.blogs.map((e) => e.fileName),
      },
    ],
    "/careers/:fileName": [
      {
        fileName: careers.jobsData.map((e) => e.fileName),
      },
    ],
  };
  return new Sitemap(router)
    .applyParams(pathsConfig)
    .build("https://hivepath.io")
    .save("./build/sitemap.xml");
}

generateSitemap();
