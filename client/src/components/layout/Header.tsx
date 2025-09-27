import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import LOGO from "./JD logo.jpg";

import { Menu, X, Sparkles, Search } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.search-container')) {
        setShowResults(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    // Mock search data - replace with actual search logic
    const mockData = [
      { title: "Math Tutoring Services", description: "Comprehensive math tutoring for all levels", category: "Services" },
      { title: "Science Tutoring", description: "Physics, Chemistry, and Biology tutoring", category: "Services" },
      { title: "About Our Tutors", description: "Meet our experienced and qualified tutors", category: "About" },
      { title: "Contact Information", description: "Get in touch with us for more information", category: "Contact" },
      { title: "Registration Process", description: "How to register for tutoring sessions", category: "Registration" },
      { title: "Final Revision Workshop", description: "Intensive exam preparation workshop", category: "Services" },
    ];

    const filtered = mockData.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filtered);
  };

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
              ? "bg-white shadow-2xl border-b border-gray-200"
              : "bg-white"
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
            <div className="bg-white border-t border-gray-200 p-4">
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
        <div className="bg-white border-t border-gray-200 py-4">
          <div className="container">
            <div className="relative max-w-2xl mx-auto search-container">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content, services, or topics..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleSearch(e.target.value);
                  }}
                  onFocus={() => setShowResults(true)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-white/90 backdrop-blur-sm"
                />
              </div>
              
              {/* Search Results Dropdown */}
              {showResults && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-96 overflow-y-auto z-50">
                  {searchResults.length > 0 ? (
                    <div className="p-2">
                      {searchResults.map((result, index) => (
                        <div
                          key={index}
                          className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                          onClick={() => {
                            setSearchQuery("");
                            setShowResults(false);
                            // Navigate to result if needed
                          }}
                        >
                          <div className="font-medium text-gray-900">{result.title}</div>
                          <div className="text-sm text-gray-600 mt-1">{result.description}</div>
                          <div className="text-xs text-purple-600 mt-1">{result.category}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
