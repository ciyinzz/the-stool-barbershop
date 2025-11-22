import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-modified.png";
import DarkModeToggle from "./DarkModeToggle";
import { FiMenu, FiX } from "react-icons/fi"; // Icon-based toggle

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-brand-900 border-b border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
        
        {/* Logo + Site Name */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-10 object-cover rounded-full" />
          <span className="text-lg sm:text-xl font-bold tracking-wide text-black dark:text-white">
            The Stool Barbershop
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6 text-sm sm:text-base font-medium text-black dark:text-white/80">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/booking">Book</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <DarkModeToggle />
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="sm:hidden text-black dark:text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 py-3 bg-white dark:bg-brand-900 text-black dark:text-white text-base font-medium">
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/booking" onClick={() => setOpen(false)}>Book</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
