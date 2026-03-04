import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.to);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'py-3'
          : 'py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled
            ? 'glass-strong shadow-lg shadow-purple-500/5'
            : 'bg-transparent'
          }`}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="text-xl font-bold tracking-tight cursor-pointer"
          >
            <span className="gradient-text">&lt;SK</span>
            <span className="text-white/80"> /&gt;</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.to;
              return (
                <a
                  key={link.to}
                  href={`#${link.to}`}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/80'
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navactive"
                      className="absolute inset-0 bg-white/[0.06] rounded-lg border border-white/[0.08]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Hire Me Desktop */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-[1.03]"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Let's Talk
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/80 hover:text-white p-2"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 mx-4"
          >
            <div className="glass-strong rounded-2xl p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={`#${link.to}`}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${activeSection === link.to
                      ? 'text-white bg-white/[0.06]'
                      : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
                    }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block px-4 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center mt-2"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
