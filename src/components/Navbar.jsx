import React from "react";
import logo from "../assets/logo.png";
import { NavbarMenu } from "../mockData/navbarItems";
import CTAbutton from "./Helpers/CTAbutton";
import LanguageDropdown from "./Helpers/LanguageDropdown";

const Navbar = () => {
  return (
    <nav
      className="
    fixed top-0 left-0 z-50 w-full backdrop-blur-3xl"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 ">
        {/* 1️⃣ Logo */}
        <a href="/" className="flex gap-1">
          <img src={logo} alt="MyLogo" className="h-8" />
          <span className="text-2xl font-bold">Scolaris</span>
        </a>

        {/* 2️⃣ Desktop menu links */}
        <ul className="hidden md:flex gap-8 ">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className=" relative font-medium  tracking-wide hover:text-blue-400 transition-colors duration-200"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <LanguageDropdown />
          <CTAbutton title="Get Started" />
        </div>
        {/* 3️⃣ Mobile menu button */}
        <button className="md:hidden ">☰</button>
      </div>
      <hr className="text-blue" />
    </nav>
  );
};

export default Navbar;
