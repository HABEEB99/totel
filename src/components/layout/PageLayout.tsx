import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

type PageLayoutProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className=" w-screen">
      <Head>
        <title className="font-bold text-xl ">
          {title ? `TOTEL - ${title}` : "TOTEL"}
        </title>
        <link rel="icon" href="/banner.png" />
        {description && <meta name="description" content={description} />}
      </Head>
      <Header />
      <main className="min-h-[85vh] mt-[12vh] pb-6 mx-auto px-3 md:px-12 lg:px-36">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default PageLayout;
