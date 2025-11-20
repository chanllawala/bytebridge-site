import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import logoImg from '../assets/Bytebridge website logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'Services', href: '#services', section: 'services' },
    { name: 'Work', href: '/work.html', section: 'work' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll to highlight nav item
  useEffect(() => {
    const sections = ['home', 'services', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -45% 0px', threshold: 0.1 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bytebridge-black/80 backdrop-blur-md border-b border-bytebridge-red/20"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between rounded-full border border-bytebridge-red/30 bg-bytebridge-black/80 px-4 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3"
          >
            <img
              src={logoImg}
              alt="ByteBridge logo"
              className="h-10 w-auto object-contain"
              loading="eager"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ color: '#ef4444' }}
                className={`group relative rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bytebridge-red/60 ${
                  activeSection === item.section ? 'bg-white/10 text-white' : 'text-gray-200'
                }`}
              >
                <span>{item.name}</span>
                <span
                  className={`absolute left-3 -bottom-1 h-0.5 w-10 origin-left bg-gradient-to-r from-bytebridge-red to-bytebridge-cyan transition-transform ${
                    activeSection === item.section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </motion.a>
            ))}
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-bytebridge-red to-bytebridge-cyan text-bytebridge-black font-semibold rounded-lg hover:shadow-lg hover:shadow-bytebridge-red/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bytebridge-red/60 transition-shadow"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-3 rounded-2xl border border-bytebridge-red/30 bg-bytebridge-black/90 p-4 space-y-3"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-200 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a href="#services" className="block w-full px-6 py-2 text-center bg-gradient-to-r from-bytebridge-red to-bytebridge-cyan text-bytebridge-black font-semibold rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bytebridge-red/60">
                Get Started
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;

