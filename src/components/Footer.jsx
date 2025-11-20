import { motion } from 'framer-motion';
import logoImg from '../assets/Bytebridge website logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bytebridge-dark border-t border-bytebridge-cyan/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoImg} alt="ByteBridge logo" className="h-10 w-auto object-contain" loading="lazy" />
            </div>
            <p className="text-gray-400 text-sm">
              Bridging creativity and technology for businesses in Stirling and beyond.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/services.html" className="hover:text-bytebridge-cyan transition-colors">Web Development</a></li>
              <li><a href="/services.html" className="hover:text-bytebridge-cyan transition-colors">Mobile Apps</a></li>
              <li><a href="/services.html" className="hover:text-bytebridge-cyan transition-colors">UI/UX Design</a></li>
              <li><a href="/services.html" className="hover:text-bytebridge-cyan transition-colors">Consulting</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/about.html" className="hover:text-bytebridge-cyan transition-colors">About Us</a></li>
              <li><a href="/contact.html" className="hover:text-bytebridge-cyan transition-colors">Contact</a></li>
              <li><a href="/case-studies.html" className="hover:text-bytebridge-cyan transition-colors">Case Studies</a></li>
              <li><a href="/work.html" className="hover:text-bytebridge-cyan transition-colors">Work</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Stirling, Scotland</li>
              <li><a href="mailto:chanllawalakirtanajitbhai@gmail.com" className="hover:text-bytebridge-cyan transition-colors">chanllawalakirtanajitbhai@gmail.com</a></li>
              <li><a href="/sitemap.xml" className="hover:text-bytebridge-cyan transition-colors">Sitemap</a></li>
              <li className="pt-2 text-xs text-gray-500">Privacy & Terms (coming soon)</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-bytebridge-cyan transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-bytebridge-cyan/20 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} ByteBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

