import { lazy, Suspense } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const HomePage = lazy(() => import("./page/HomePage"));
const AboutUsPage = lazy(() => import("./page/AboutUsPage"));
const ContactUsPage = lazy(() => import("./page/ContactUsPage"));
const DocumentPage = lazy(() => import("./page/DocumentPage"));
const TeamPage = lazy(() => import("./page/TeamPage"));
const MemeberDetailComponent = lazy(() =>
  import("./page/MemberDetailComponent")
);

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-us", element: <AboutUsPage /> },
      { path: "contact-us", element: <ContactUsPage /> },
      { path: "documents", element: <DocumentPage /> },
      { path: "our-team/:id", element: <MemeberDetailComponent /> },
      { path: "our-team", element: <TeamPage /> },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}