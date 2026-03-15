import React from "react";
import { useLocation } from "react-router";
import BannerComponent from "../components/manually/BannerComponent";
import OurTeamComponent from "../components/manually/our-team/OurTeamComponent";

const TeamPage = () => {
  const { pathname } = useLocation();

  return (
    <main>
      <BannerComponent pathname={pathname}  pageName={"Welcome to Our team"} />
      <OurTeamComponent />
    </main>
  );
};

export default TeamPage;
