import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(12,14,26,0.95)] border-b border-white/5 backdrop-blur px-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between py-4">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#855afc] via-[#0ea5e9] to-[#f97316]"
        >
          Agentic AI Suite
        </Link>

        {/* Desktop Nav */}
       <nav className="hidden md:flex items-center gap-8 font-medium">
                 <Link to="/" className="hover:text-blue-500 transition">
                   Home
                 </Link>
                 <Link to="/AgenticSuite" className="hover:text-blue-500 transition">
                   AgenticSuite
                 </Link>
                 <Link to="/Industries" className="hover:text-blue-500 transition">
                   Industries
                 </Link>
                 <Link to="/Benifits" className="hover:text-blue-500 transition">
                   Benefits
                 </Link>
                 <a href="#contact" className="hover:text-blue-500 transition">
                   Contact
                 </a>
                  <div className="hidden md:block">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-[12px] px-6 py-3 font-semibold bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white hover:opacity-90"
          >
            Book a Demo <span>→</span>
          </a>
        </div>
               </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <motion.button
            aria-label="menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
          >
            {/* Hamburger Lines */}
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 bg-white rounded"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-8 h-0.5 bg-white rounded"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 bg-white rounded"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col gap-3 px-6 pb-4 bg-[rgba(12,14,26,0.95)] border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col items-start gap-4 p-6 text-lg">
                      <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-blue-400 transition w-full"
                      >
                        Home
                      </Link>
                      <Link
                        to="/AgenticSuite"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-blue-400 transition w-full"
                      >
                        AgenticSuite
                      </Link>
                      <Link
                        to="/Industries"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-blue-400 transition w-full"
                      >
                        Industries
                      </Link>
                      <Link
                        to="/Benifits"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-blue-400 transition w-full"
                      >
                        Benefits
                      </Link>
                      <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-blue-400 transition w-full"
                      >
                        Contact
                      </a>
            
                      <a
                        href="#demo"
                        onClick={() => setIsOpen(false)}
                        className="mt-6 inline-flex items-center gap-2 rounded-[12px] px-6 py-3 font-semibold bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white hover:opacity-90"
                      >
                        Book a Demo <span>→</span>
                      </a>
                    </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;









