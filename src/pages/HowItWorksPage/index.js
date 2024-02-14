import React from "react";
import GridContent from "../../components/GridContent";
import FeaturedText from "../../components/common/FeaturedText";
import { Box, Hidden } from "@material-ui/core";
import DefaultLayout from "../../Layouts/DefaultLayout";
import MultiStepProgressBar from "../../components/MultiStepProgressBar";
import { howItWorksData } from "../../data/HowItWorksData";

const HowItWorksPage = () => {
  return (
    <DefaultLayout
      style={{ position: "relative" }}
      title="How it works - the hivepath Way"
    >
      <Hidden mdDown>
        {" "}
        <MultiStepProgressBar />
      </Hidden>{" "}
      <Box style={{ paddingTop: "128px" }}>
        <FeaturedText
          title="How Hivepath works?"
          description=" Effective way of connecting and achieving your goals"
        />
        <div id="workProcess">
          {howItWorksData.map((item) => {
            const {
              title,
              description,
              polygonUp,
              id,
              imgSrc,
              reverse,
              bgPos,
              poly,
              number,
            } = item;

            return (
              <GridContent
                key={id}
                title={title}
                description={description}
                imgSrc={imgSrc}
                id={id}
                reverse={reverse}
                bgPos={bgPos}
                poly={poly}
                polygonUp={polygonUp}
                number={number}
              />
            );
          })}
        </div>
      </Box>
    </DefaultLayout>
  );
};

export default HowItWorksPage;
