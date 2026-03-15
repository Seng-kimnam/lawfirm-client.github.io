import React from "react";
import BannerComponent from "../components/manually/BannerComponent";
import { useLocation } from "react-router";
import DocumentComponent from "../components/manually/doc/DocumentComponent";

const DocumentPage = () => {
  const { pathname } = useLocation();
  return (
    <main>
      <BannerComponent pathname={pathname} pageName={"Document Of Law"} />
      <DocumentComponent />
    </main>
  );
};

export default DocumentPage;
