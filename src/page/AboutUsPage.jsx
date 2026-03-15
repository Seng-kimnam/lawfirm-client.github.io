"use client";
import OurOverviewComponent from "../components/manually/about-us/OurOverviewComponent";
import OurValueComponent from "../components/manually/about-us/OurValueComponent";
import FooterComponent from "../components/manually/FooterComponent";
import BannerComponent from "../components/manually/BannerComponent";
import { useLocation } from "react-router";

const AboutUsPage = () => {
  const { pathname } = useLocation();

  return (  
    <main>
      <BannerComponent pathname={pathname} pageName={"About Us"} />
      <section>
        <OurOverviewComponent />
        <OurValueComponent />
      </section>
    </main>
  );
};

export default AboutUsPage;
