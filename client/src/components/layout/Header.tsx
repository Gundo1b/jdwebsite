import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import LOGO from "./JD logo.jpg"; 

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "shadow-md" : ""
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src={LOGO} alt="Logo" className="h-11 w-11 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Services
            </Link>
            <Link href="/About" className="text-gray-700 hover:text-primary font-medium transition-colors">
             About
            </Link>
            {/* <Link href="/WhoCanJoin" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Who Can Join
            </Link> */}
            <Link href="/Contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
            <Link
              href="/Register"
              className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t border-gray-200 ${mobileMenuOpen ? '' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={closeMobileMenu}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            Services
          </Link>
          <Link
            href="/About"
            onClick={closeMobileMenu}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            About
          </Link>
          {/* <Link
            href="/WhoCanJoin"
            onClick={closeMobileMenu}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            Who Can Join
          </Link> */}
          <Link
            href="/Contact"
            onClick={closeMobileMenu}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            Contact
          </Link>
          <Link
            href="/Register"
            onClick={closeMobileMenu}
            className="block w-full text-left px-3 py-2 rounded-md bg-primary text-white hover:bg-blue-600 mt-3 rounded-md font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
