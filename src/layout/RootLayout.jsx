import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../navigation/NavBar";
import FooterComponent from "../components/manually/FooterComponent";

const RootLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Show loader when route changes
    setLoading(true);
    // Always start new route from top of page.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // Disable scroll
    document.body.style.overflow = "hidden";
    document.title = location.pathname === "/"  ? "HOME" : location.pathname
      .slice(1)
      .replaceAll("-", " ")
      .toUpperCase();

    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto"; // Re-enable scroll
    }, 1500); // simulate loading delay

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [location.pathname]);

  return (
    <main className="relative flex min-h-screen flex-col">
      <NavBar />

      {loading && (
        <div className="fixed inset-0 text-3xl font-bold text-gray-700 z-50 flex justify-center items-center bg-white">
          <span className="mr-10 text-black ">Loading</span>
          <span className="loader"></span>
        </div>
      )}

      <div className="flex-1">
        <Outlet />
      </div>
      <FooterComponent />
    </main>
  );
};

export default RootLayout;
