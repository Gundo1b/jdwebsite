import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import LOGO from "./JD logo.jpg";
import Search from "@/components/Search";
import { Menu, X, Sparkles } from "lucide-react";

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

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/About", label: "About" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-center py-3 relative overflow-hidden">
        <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\"/%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="relative z-10 flex items-center justify-center gap-2 text-sm font-semibold">
          <Sparkles className="w-4 h-4 animate-pulse" />
          🔥 50% OFF Final Revision Examination Workshop - Limited Time!
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50">
        <nav
          className={cn(
            "transition-all duration-300",
            scrolled
              ? "glass shadow-2xl border-b border-white/20"
              : "bg-white/95 backdrop-blur-sm"
          )}
        >
          <div className="container">
            <div className="flex justify-between h-20 items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img 
                    src={LOGO} 
                    alt="JD Tutoring Logo" 
                    className="h-12 w-12 object-contain rounded-full shadow-lg group-hover:shadow-xl transition-shadow" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-xl gradient-text">JD Tutoring</div>
                  <div className="text-xs text-gray-500">Excellence in Education</div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-full font-medium transition-all duration-300 relative group",
                      location === item.href
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50/50"
                    )}
                  >
                    {item.label}
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </Link>
                ))}
                <Link
                  href="/Register"
                  className="btn-primary ml-4"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-full hover:bg-purple-50 transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6 text-gray-700" />
                  ) : (
                    <Menu className="h-6 w-6 text-gray-700" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={cn(
            "lg:hidden transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}>
            <div className="glass border-t border-white/20 p-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "block px-4 py-3 rounded-xl font-medium transition-all duration-300",
                      location === item.href
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50/50"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/Register"
                  onClick={closeMobileMenu}
                  className="block w-full text-center btn-primary mt-4"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Search Bar */}
        <div className="glass border-t border-white/10 py-4">
          <div className="container">
            <Search />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
