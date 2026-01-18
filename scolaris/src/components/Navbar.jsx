import React from "react";
import logo from "../assets/logo.png";
import { NavbarMenu } from "../mockData/navbarItems";
import CTAbutton from "./Helpers/CTAbutton";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50  text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* 1️⃣ Logo */}
        <a href="/" className="flex gap-1">
          <div></div>
          <img src={logo} alt="MyLogo" className="h-8" />
          <span className="text-2xl font-semibold">Scolaris</span>
        </a>

        {/* 2️⃣ Desktop menu links */}
        <ul className="hidden md:flex gap-8 ">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className=" relative font-medium  tracking-wide hover:text-amber-300 transition-colors duration-200"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CTAbutton title="Get Started" />
        </div>
        {/* 3️⃣ Mobile menu button */}
        <button className="md:hidden ">☰</button>
      </div>
      <hr className="text-white" />
    </nav>
  );
};

export default Navbar;
