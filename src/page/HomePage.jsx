import { useLocation } from "react-router";
import FooterComponent from "../components/manually/FooterComponent";
import BannerComponent from "../components/manually/BannerComponent";
import NewsComponent from "../components/manually/home/NewsComponent";
import OfficeComponent from "../components/manually/home/OfficeComponent";
import TeamComponent from "../components/manually/home/TeamComponent";
import WelcomeComponent from "../components/manually/home/WelcomeComponent";
import { useEffect, useState } from "react";
import { request } from "../constants/api";

const HomePage = () => {
  const { pathname } = useLocation();
  const [imageBanner, setImageBanner] = useState([]);
  useEffect(() => {
    async function fetchImageBanner() {
      const res = await request("/files/banner-list", "GET");
      const { payload } = res ;
      setImageBanner(payload);
      console.log("Hel ", res);
    }
    fetchImageBanner();
  }, []);

  return (
    <main>
      <BannerComponent imageBanner={imageBanner} pathname={pathname} />
      <WelcomeComponent />
      <TeamComponent />
      <NewsComponent />
      <OfficeComponent />
    </main>
  );
};

export default HomePage;
