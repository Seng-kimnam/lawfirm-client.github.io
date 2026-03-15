import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const HomePage = lazy(() => import("./page/HomePage"));
const AboutUsPage = lazy(() => import("./page/AboutUsPage"));
const ContactUsPage = lazy(() => import("./page/ContactUsPage"));
const DocumentPage = lazy(() => import("./page/DocumentPage"));
const TeamPage = lazy(() => import("./page/TeamPage"));
const MemeberDetailComponent = lazy(() =>
  import("./page/MemberDetailComponent")
);

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      { path: "/documents", element: <DocumentPage /> },
      { path: "/our-team/:id", element: <MemeberDetailComponent /> },
      { path: "/our-team", element: <TeamPage /> },
    ],
  },
]);

const App = () => {
  return (
    // <Suspense
    //   fallback={
    //     <div className="fixed inset-0 text-2xl font-bold text-gray-700 z-10  flex justify-center items-center bg-white">
    //       <span className="loader"></span>
    //     </div>
    //   }
    // >
    <RouterProvider router={routers} />
    // </Suspense>
  );
};

export default App;
