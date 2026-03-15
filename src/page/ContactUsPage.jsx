import React from "react";
import FormContact from "../components/manually/contact-us/FormContact";
import BannerComponent from "../components/manually/BannerComponent";
import { useLocation } from "react-router";


const ContactUsPage = () => {
    const { pathname } = useLocation();

  return (
    <main>
      <BannerComponent pathname = {pathname} pageName = "Contact Us"/>
      <FormContact/>
    </main>
  );
};

export default ContactUsPage;
