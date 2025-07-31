import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);

  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const keyword = searchTerm.trim().toLowerCase();

      if (keyword.includes("tshirt")) {
        setNoResults(false);
        navigate("/tshirts");
        setSearchOpen(false);
        setSearchTerm("");
        setTimeout(() => window.location.reload(), 100);
      } else if (keyword.includes("jean")) {
        setNoResults(false);
        navigate("/jeans");
        setSearchOpen(false);
        setSearchTerm("");
        setTimeout(() => window.location.reload(), 100);
      } else if (keyword.includes("shirt")) {
        setNoResults(false);
        navigate("/shirts");
        setSearchOpen(false);
        setSearchTerm("");
        setTimeout(() => window.location.reload(), 100);
      } else {
        setNoResults(true);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchTerm("");
        setNoResults(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <nav className="w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center relative">
      {/*<div className="text-2xl font-bold cursor-pointer" onClick={() => handleNavigation("/")}>
        Gentlify
      </div>*/}

      <img
  src={logo}
  alt="Gentlify Logo"
  className="h-10 w-20 cursor-pointer"
  onClick={() => handleNavigation("/")}
/>


      {/* Desktop menu */}
      <div className="hidden lg:flex gap-6 items-center">
        <button
          onClick={() => handleNavigation("/")}
          className="text-black hover:text-gray-500"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("/tshirts")}
          className="text-black hover:text-gray-500"
        >
          T-Shirts
        </button>
        <button
          onClick={() => handleNavigation("/jeans")}
          className="text-black hover:text-gray-500"
        >
          Jeans
        </button>
        <button
          onClick={() => handleNavigation("/shirts")}
          className="text-black hover:text-gray-500"
        >
          Shirts
        </button>

        {/* Search icon */}
        <div className="relative" ref={searchRef}>
          <FiSearch
            className="text-xl cursor-pointer"
            onClick={() => {
              setSearchOpen(!searchOpen);
              setNoResults(false);
            }}
          />
          {searchOpen && (
            <>
              <input
                type="text"
                placeholder="Search by name..."
                className="absolute right-0 top-6 border px-2 py-1 rounded w-48 shadow"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (noResults) setNoResults(false);
                }}
                onKeyDown={handleSearch}
                autoFocus
              />
              {noResults && (
                <div className="absolute right-0 top-[3.5rem] bg-white border border-red-400 text-red-600 rounded px-3 py-1 text-sm shadow w-48">
                  No products found
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden flex items-center gap-4">
        {/* Search icon */}
        <div className="relative" ref={searchRef}>
          <FiSearch
            className="text-xl cursor-pointer"
            onClick={() => {
              setSearchOpen(!searchOpen);
              setNoResults(false);
            }}
          />
          {searchOpen && (
            <>
              <input
                type="text"
                placeholder="Search..."
                className="absolute right-0 top-6 border px-2 py-1 rounded w-40 shadow"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (noResults) setNoResults(false);
                }}
                onKeyDown={handleSearch}
                autoFocus
              />
              {noResults && (
                <div className="absolute right-0 top-[3.5rem] bg-white border border-red-400 text-red-600 rounded px-3 py-1 text-sm shadow w-40">
                  No products found
                </div>
              )}
            </>
          )}
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="absolute top-16 right-6 bg-white border shadow-md rounded p-4 space-y-2 z-50 lg:hidden"
          ref={menuRef}
        >
          <button
            onClick={() => handleNavigation("/")}
            className="block text-black hover:text-gray-500"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/tshirts")}
            className="block text-black hover:text-gray-500"
          >
            T-Shirts
          </button>
          <button
            onClick={() => handleNavigation("/jeans")}
            className="block text-black hover:text-gray-500"
          >
            Jeans
          </button>
          <button
            onClick={() => handleNavigation("/shirts")}
            className="block text-black hover:text-gray-500"
          >
            Shirts
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
