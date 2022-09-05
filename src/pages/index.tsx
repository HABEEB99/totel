import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import React from "react";
import Banner from "../components/banner/Banner";
import PageLayout from "../components/layout/PageLayout";
import Newsletter from "../components/newsletter/Newsletter";
import TopDestinations from "../components/top-destinations/TopDestinations";

type HomeProps = {
  session: Session | null;
};

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

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const session = await getSession(context);
  return {
    props: { session },
  };
};
