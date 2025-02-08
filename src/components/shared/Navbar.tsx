"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TbMenu3, TbX } from "react-icons/tb";
import { motion } from "framer-motion";
import { ThemeButton } from "./ThemeButton";

const navItems = ["About Me", "Resume", "Projects", "Contact"];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Drawer content with close button
  const drawer = (
    <div className="text-center">
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={handleDrawerToggle} className="p-2">
          <TbX className={`text-2xl text-primary-text`} />
        </button>
      </div>

      <hr className="border-gray-300" />

      <ul className="flex flex-col gap-4 mt-4">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              href={
                item === "About Me"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "")}`
              }
              className={`block p-2 ${
                (item === "About Me" && pathname === "/") ||
                (item !== "About Me" &&
                  pathname === `/${item.toLowerCase().replace(" ", "")}`)
                  ? "text-[#7927FF]"
                  : "text-primary-text"
              }`}
              onClick={handleDrawerToggle}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={`sticky top-0 z-10 bg-nav-bg mt-5`}>
      <nav className="container mx-auto">
        <div className="flex justify-between items-center p-2 md:p-4">
          {/* Mobile logo */}
          <div className="lg:hidden">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#7927FF] rounded-sm mb-1"></div>
              <h3 className={`text-xl font-semibold text-[#171717]`}>
                Pallab Kumar Sarker
              </h3>
            </div>
            <p className={`text-base font-light text-[#171717]`}>
              Web Developer
            </p>
          </div>

          {/* mobile Theme toggle */}
          <div className="lg:hidden">
            <ThemeButton />
          </div>

          {/* Mobile menu button */}
          <button onClick={handleDrawerToggle} className="md:hidden p-2">
            <TbMenu3 className="text-2xl text-[#7927FF]" />
          </button>

          {/* Desktop logo */}
          <div className="hidden lg:flex items-center lg:gap-x-10 md:gap-x-5 md:mr-5 lg:mr-0">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#7927FF] rounded-sm"></div>
              <p className={`text-2xl font-semibold text-[#171717]`}>
                Pallab Kumar Sarker
              </p>
              <p className={`text-xl font-light text-[#171717]`}>
                / Web Developer
              </p>
            </div>

            {/* desktop Theme toggle */}
            <ThemeButton />
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:flex gap-10">
            {navItems.map((item) => (
              <Link
                key={item}
                href={
                  item === "About Me"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className={`text-xl font-medium ${
                  (item === "About Me" && pathname === "/") ||
                  (item !== "About Me" &&
                    pathname === `/${item.toLowerCase().replace(" ", "")}`)
                    ? "text-[#7927FF]"
                    : "text-[#171717]"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: mobileOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-full h-full bg-nav-mobile z-50 sm:hidden"
      >
        {drawer}
      </motion.div>
    </div>
  );
};

export default Navbar;
