import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-brand-900 border-b border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
        
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <span className="text-lg sm:text-xl font-bold tracking-wide text-black dark:text-white">
            The Stool Barbershop
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-black dark:text-white/80">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/booking">Book</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
