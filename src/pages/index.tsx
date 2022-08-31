import React from "react";
import Banner from "../components/banner/Banner";
import PageLayout from "../components/layout/PageLayout";
import Newsletter from "../components/newsletter/Newsletter";
import TopDestinations from "../components/top-destinations/TopDestinations";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <PageLayout title="HOME PAGE" description="The home page">
      <Banner />
      <TopDestinations />
      <Newsletter />
    </PageLayout>
  );
};
export default Home;
