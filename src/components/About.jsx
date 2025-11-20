import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const timeline = [
    { label: 'Discovery', detail: 'Listen closely, define success, and scope only what moves the needle.', icon: '🧭' },
    { label: 'Design', detail: 'Wireframes, mood boards, and ready-to-build UI kits shaped around your brand.', icon: '🎨' },
    { label: 'Build', detail: 'Modern stack, accessibility checks, SEO-ready foundations, integrations handled.', icon: '⚙️' },
    { label: 'Launch & care', detail: 'Deploy, monitor, and update whenever you need — we stay on standby.', icon: '🚀' },
  ];

  const values = [
    {
      title: 'Focused',
      description: 'We start with your business goals, not a template.',
      icon: '🎯',
    },
    {
      title: 'Collaborative',
      description: 'Weekly check-ins, shared docs, transparent progress.',
      icon: '🤝',
    },
    {
      title: 'Quality',
      description: 'Accessibility, performance, and testing baked in.',
      icon: '🏆',
    },
    {
      title: 'Local',
      description: 'Stirling-based, supporting nearby businesses.',
      icon: '📍',
    },
  ];

  const stack = ['React', 'Next.js', 'React Native', 'Node.js', 'TypeScript', 'Tailwind CSS'];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <motion.section
      id="about"
      className="relative py-24 bg-bytebridge-black overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full blur-3xl bg-bytebridge-cyan/20" />
        <div className="absolute bottom-0 left-0 h-64 w-full bg-gradient-to-r from-bytebridge-red/10 via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-6 space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-wide text-bytebridge-cyan/80">About ByteBridge</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Calm, modern builds for Stirling brands</h2>
          <p className="text-gray-300 mt-4 text-lg leading-relaxed">
            We’re a Stirling studio blending design craft with reliable engineering. Whether you’re launching a new idea or refreshing an existing presence, we deliver websites and mobile experiences that feel intentional, fast, and ready for growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-bytebridge-cyan/20 bg-gradient-to-br from-bytebridge-dark to-bytebridge-black p-6 space-y-6">
              <h3 className="text-2xl font-semibold text-white">How we work</h3>
              <div className="space-y-3">
                {timeline.map((item, idx) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left flex gap-4 p-3 rounded-xl transition-all ${
                      activeStep === idx ? 'bg-bytebridge-cyan/10 border border-bytebridge-cyan/40' : 'border border-transparent hover:border-bytebridge-cyan/20'
                    }`}
                    aria-expanded={activeStep === idx}
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="text-white font-semibold">{item.label}</div>
                      <p className={`text-sm text-gray-300 leading-relaxed ${activeStep === idx ? 'opacity-100' : 'opacity-70 line-clamp-1'}`}>{item.detail}</p>
                      {activeStep === idx && (
                        <p className="text-xs text-gray-400 mt-1">Tap to collapse</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-3">Toolkit we reach for</p>
              <div className="flex flex-wrap gap-3">
                {stack.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full border border-bytebridge-cyan/30 text-sm text-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl border border-bytebridge-cyan/20 bg-gradient-to-br from-bytebridge-dark to-bytebridge-black p-6"
            >
              <div className="w-full">
                <p className="text-sm uppercase text-bytebridge-cyan/80">Two friends, one mission</p>
                <h3 className="text-2xl font-semibold text-white">Turning local dreams into digital launches</h3>
                <p className="text-sm text-gray-300 leading-relaxed mt-2">
                  We’re a tight-knit duo handling everything from concept to deployment. No hand-offs, no agencies—just two builders obsessed with making Stirling businesses shine online.
                </p>
                <p className="text-xs text-gray-400 mt-2">Replies within 24–48 hours · <a className="text-bytebridge-cyan underline" href="mailto:chanllawalakirtanajitbhai@gmail.com">chanllawalakirtanajitbhai@gmail.com</a></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6, rotate: -0.5 }}
                  className="rounded-2xl border border-bytebridge-cyan/20 bg-gradient-to-br from-bytebridge-dark to-bytebridge-black p-5 shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:border-bytebridge-cyan/50 transition-all"
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                  <p className="text-sm text-gray-300 mt-1 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-bytebridge-cyan/30 bg-gradient-to-r from-bytebridge-red/20 to-bytebridge-cyan/20 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <p className="text-sm uppercase tracking-wide text-bytebridge-cyan/80">Ready when you are</p>
            <h3 className="text-2xl font-semibold text-white mt-2">Let’s map your project in under 48 hours</h3>
            <p className="text-sm text-gray-200 mt-1">Send a quick brief, and we’ll reply with timing, scope, and starter pricing.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-bytebridge-black font-semibold shadow-lg hover:shadow-bytebridge-red/40 transition-transform hover:scale-[1.02]"
          >
            Contact us
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

