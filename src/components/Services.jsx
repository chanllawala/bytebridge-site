import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const CodeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const PaletteIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Services = () => {
  const services = [
    {
      icon: CodeIcon,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies. Fast, responsive, and SEO-optimized for your business needs.',
      color: 'from-bytebridge-green to-emerald-600',
      details: {
        heading: 'Web Development',
        intro: 'We build fast, secure, and accessible full‑stack websites tailored to your goals.',
        points: [
          'Modern stack (React + Vite), server integration on demand',
          'Responsive, SEO‑optimized, Core Web Vitals friendly',
          'Content and component design system using Tailwind CSS',
          'Analytics, forms, and CMS options as needed',
        ],
        process: ['Discovery & scope', 'UX wireframes & visual design', 'Implementation & content migration', 'QA, performance pass, handover'],
      },
    },
    {
      icon: SmartphoneIcon,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android. Engaging user experiences that drive results.',
      color: 'from-bytebridge-cyan to-cyan-600',
      details: {
        heading: 'Mobile Apps',
        intro: 'iOS and Android apps built with modern cross‑platform frameworks.',
        points: [
          'React Native or Flutter per project fit',
          'Native-feel UX, offline support, push notifications',
          'Secure APIs, auth, and analytics',
          'App Store & Play Store submission support',
        ],
        process: ['Product definition & backlog', 'UI/UX prototyping', 'Implementation & testing on devices', 'Store launch & iterations'],
      },
    },
    {
      icon: PaletteIcon,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that your users will love. From wireframes to pixel-perfect interfaces.',
      color: 'from-purple-500 to-pink-500',
      details: {
        heading: 'UI/UX Design',
        intro: 'Human‑centered design from research to pixel‑perfect interfaces.',
        points: [
          'User research, personas, journeys',
          'Wireframes, interactive prototypes, design systems',
          'Accessibility‑first, responsive layouts',
          'Developer‑ready assets & handoff',
        ],
        process: ['Discovery & research', 'IA & wireframes', 'Visual design & prototyping', 'Design QA & iteration'],
      },
    },
    {
      icon: ZapIcon,
      title: 'Consulting',
      description: 'Expert advice on technology strategy, digital transformation, and scaling your online presence.',
      color: 'from-yellow-500 to-orange-500',
      details: {
        heading: 'Consulting',
        intro: 'Practical guidance on technology strategy, delivery, and scaling.',
        points: [
          'Architecture reviews & roadmaps',
          'Build vs buy decisions, vendor selection',
          'Performance, security, and cost optimization',
          'Delivery leadership and team enablement',
        ],
        process: ['One‑off audits and recommendations', 'Short sprints focused on key outcomes', 'Ongoing advisory and mentoring'],
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [selectedIndex]);

  const selected = typeof selectedIndex === 'number' ? services[selectedIndex] : null;

  return (
    <motion.section
      id="services"
      className="py-24 bg-bytebridge-dark"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedIndex(index)}
              className="relative cursor-pointer bg-gradient-to-br from-bytebridge-black to-bytebridge-dark p-8 rounded-xl border border-bytebridge-cyan/20 hover:border-bytebridge-cyan/50 transition-all group overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelectedIndex(index); } }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-bytebridge-cyan/10 blur-2xl" />
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-bytebridge-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {selected && (
          <div aria-hidden className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setSelectedIndex(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.details.heading} details`}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-bytebridge-cyan/20 bg-gradient-to-br from-bytebridge-black to-bytebridge-dark p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${services[selectedIndex].color} grid place-items-center`}>
                    <selected.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold">{selected.details.heading}</h4>
                </div>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="rounded-md border border-bytebridge-cyan/20 px-2 py-1 text-gray-300 hover:text-white hover:border-bytebridge-cyan/50"
                >
                  Close
                </button>
              </div>

              <p className="mt-4 text-gray-300">{selected.details.intro}</p>

              <div className="mt-6 grid gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-200">What you get</div>
                  <ul className="mt-2 list-disc pl-5 text-gray-400 space-y-1">
                    {selected.details.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-200">Process</div>
                  <ol className="mt-2 list-decimal pl-5 text-gray-400 space-y-1">
                    {selected.details.process.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/work.html"
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg bg-gradient-to-r from-bytebridge-green to-bytebridge-cyan px-4 py-2 font-semibold text-bytebridge-black"
                >
                  See our work
                </a>
                <a
                  href="mailto:hello@bytebridge.co.uk?subject=Project%20Enquiry"
                  className="rounded-lg border border-bytebridge-cyan/40 px-4 py-2 text-gray-200 hover:border-bytebridge-cyan/70"
                >
                  Contact us
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Services;

