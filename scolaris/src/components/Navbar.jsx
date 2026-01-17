import React from "react";
import logo from "../assets/logo.png";
import { NavbarMenu } from "../mockData/data";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* 1️⃣ Logo */}
        <a href="/">
          <img src={logo} alt="MyLogo" className="h-8" />
        </a>

        {/* 2️⃣ Desktop menu links */}
        <ul className="hidden md:flex gap-8 ">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="relative font-medium text-sm tracking-wide hover:text-blue-400 transition-colors duration-200"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* 3️⃣ Mobile menu button */}
        <button className="md:hidden ">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
