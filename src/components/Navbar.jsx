import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-md fixed w-full top-0 z-50"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-600">MakhanaMart</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 font-semibold text-gray-700">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/shop" className="hover:text-green-600">Shop</Link>
        <Link to="/about" className="hover:text-green-600">About</Link>
        <Link to="/contact" className="hover:text-green-600">Contact</Link>
        <Link to="/cart" className="hover:text-green-600">Cart</Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-16 right-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 md:hidden"
        >
          <Link onClick={()=>setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={()=>setMenuOpen(false)} to="/shop">Shop</Link>
          <Link onClick={()=>setMenuOpen(false)} to="/about">About</Link>
          <Link onClick={()=>setMenuOpen(false)} to="/contact">Contact</Link>
          <Link onClick={()=>setMenuOpen(false)} to="/cart">Cart</Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
