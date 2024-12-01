import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const menuItems = [
  { label: "Why Certping?", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Check your website", href: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav className="text-black">
        <div
          className={`fixed top-0 left-0 right-0 px-6 py-4 transition-all duration-300 z-50 w-full border border-b ${
            isScrolled
              ? "bg-white/70 backdrop-blur-lg text-black"
              : "bg-white text-black"
          }`}
        >
          <div className="flex items-center justify-between lg:justify-around ">
            <div className="flex items-center gap-2">
              <img
                src="/logo.svg"
                className="w-8 h-8 bg-black rounded-full"
                alt="image"
              />
              <span className="text-xl font-semibold">CertPing</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="hover:bg-[#f4f4f5] rounded-lg py-2 px-3">
                Why Certping?
              </a>
              <a href="#" className="hover:bg-[#f4f4f5] rounded-lg py-2 px-3">
                Features
              </a>
              <a href="#" className="hover:bg-[#f4f4f5] rounded-lg py-2 px-3">
                Pricing
              </a>
              <a href="#" className="hover:bg-[#f4f4f5] rounded-lg py-2 px-3">
                Check your website
              </a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <button className="px-4 py-2 border rounded-full">Log in</button>
              <button className="px-6 py-2 text-white bg-[#2E2E31] rounded-full">
                Get Started
              </button>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`absolute left-0 right-0 shadow-md transition-all duration-300 ease-in-out ${
              isMenuOpen ? "top-full  bg-white" : "-top-96 "
            } ${isScrolled ? "bg-white/70 backdrop-blur-lg text-black" : ""}`}
          >
            <div className="flex flex-col p-4">
              {menuItems.map((menu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 * index,
                  }}
                  viewport={{ once: false }}
                >
                  <a
                    href={menu.href}
                    className="hover:bg-[#f4f4f5] rounded-lg py-2 px-3 transition duration-300 w-full flex flex-col"
                  >
                    {menu.label}
                  </a>
                </motion.div>
              ))}

              {/* Buttons animation */}
              <div className="flex flex-col gap-2">
                <motion.button
                  className="px-4 pt-[6px] pb-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-[#f4f4f5] rounded-full"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                  }}
                  viewport={{ once: false }}
                >
                  Log in
                </motion.button>

                <motion.button
                  className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#2E2E31] text-primary-foreground hover:bg-[#161619] pt-[6px] pb-2 rounded-full px-6"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6, // Same duration for buttons
                    delay: 0.3, // Optional delay to make buttons appear slightly after the menu items
                  }}
                  viewport={{ once: false }}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
