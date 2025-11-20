import { motion } from 'framer-motion';
import { useState } from 'react';

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cfg = window.EMAILJS_CONFIG || {};
    const canEmailJs = window.emailjs && cfg.PUBLIC_KEY && cfg.SERVICE_ID && cfg.TEMPLATE_ID;
    if (canEmailJs) {
      try {
        await window.emailjs.send(cfg.SERVICE_ID, cfg.TEMPLATE_ID, {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        });
        alert('Thanks! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
        return;
      } catch (err) {
        // fall through to mailto fallback
      }
    }
    const subject = encodeURIComponent('New Project Enquiry');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:chanllawalakirtanajitbhai@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MailIcon,
      label: 'Email',
      value: 'chanllawalakirtanajitbhai@gmail.com',
      href: 'mailto:chanllawalakirtanajitbhai@gmail.com',
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Stirling, Scotland',
      href: '#',
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-24 bg-bytebridge-dark"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 bg-bytebridge-black rounded-lg border border-bytebridge-cyan/20 hover:border-bytebridge-cyan/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-bytebridge-green to-bytebridge-cyan rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-bytebridge-black" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                  <div className="text-white font-medium">{info.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-bytebridge-black p-8 rounded-xl border border-bytebridge-cyan/20 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bytebridge-dark border border-bytebridge-cyan/20 rounded-lg text-white focus:outline-none focus:border-bytebridge-cyan transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bytebridge-dark border border-bytebridge-cyan/20 rounded-lg text-white focus:outline-none focus:border-bytebridge-cyan transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-bytebridge-dark border border-bytebridge-cyan/20 rounded-lg text-white focus:outline-none focus:border-bytebridge-cyan transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-bytebridge-green to-bytebridge-cyan text-bytebridge-black font-bold rounded-lg flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-bytebridge-cyan/50 transition-shadow"
            >
              Send Message
              <SendIcon />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

