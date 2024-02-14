import { Box } from "@material-ui/core";
import React from "react";
import banner from "../../assets/homepage/banner2.png";
import Banner from "../../sections/HomePage/Banner";
import DefaultLayout from "../../Layouts/DefaultLayout";
import OurUsersSection from "../../sections/HomePage/OurUsersSection";
import { reasonsToJoinData } from "../../data/homepage/reasonsToJoinData";
import ProductFeaturesSection from "../../sections/HomePage/ProductFeaturesSection";
import { productFeaturesData } from "../../data/homepage/productFeaturesData";
import ReasonsToJoinSection from "../../sections/HomePage/ReasonsToJoinSection";
import BenefitsSection from "../../sections/HomePage/BenefitsSection";
import { benefitsData } from "../../data/homepage/benefitsData";
import { ourUsersData } from "../../data/homepage/ourUsersData";

const HomePage = () => {
  return (
    <DefaultLayout title="Welcome To Hivepath">
      <Box style={{ color: "white", paddingTop: "128px" }}>
        <Banner
          poly
          polygonUp="-30%"
          title="<span>Redefining networking journey</span> all-in-one new age networking platform"
          imgSrc={banner}
          button
        />
        <ProductFeaturesSection data={productFeaturesData} />
        <OurUsersSection data={ourUsersData} />
      
        <ReasonsToJoinSection data={reasonsToJoinData} />
        <BenefitsSection data={benefitsData} />
      </Box>
    </DefaultLayout>
  );
};

export default HomePage;
