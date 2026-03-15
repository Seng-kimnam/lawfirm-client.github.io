import logo from "../assets/images/gclawfirm.jpg";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const linkList = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about-us" },
  { title: "My Team", url: "/our-team" },
  { title: "Contact Us", url: "/contact-us" },
  { title: "Documents", url: "/documents" },
];

const NavBar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#001a3b] text-white shadow-md shadow-black/5">
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img className="h-16 w-auto py-2" src={logo} alt="GC Law Firm" />
            <span className="sr-only">Home</span>
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white/90 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <ul className="hidden items-center gap-8 md:flex">
            {linkList.map((link) => {
              const active = location.pathname === link.url;
              return (
                <li key={link.url}>
                  <Link
                    to={link.url}
                    className={[
                      "rounded-md px-3 py-2 text-lg transition",
                      "hover:bg-white/10 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                      active ? "underline" : "",
                    ].join(" ")}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          id="mobile-nav"
          className={["md:hidden", mobileOpen ? "block pb-4" : "hidden"].join(" ")}
        >
          <ul className="flex flex-col gap-1 rounded-lg bg-white/5 p-2">
            {linkList.map((link) => {
              const active = location.pathname === link.url;
              return (
                <li key={link.url}>
                  <Link
                    to={link.url}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "block rounded-md px-3 py-2 text-base transition",
                      "hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                      active ? "bg-white/10 underline" : "",
                    ].join(" ")}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
