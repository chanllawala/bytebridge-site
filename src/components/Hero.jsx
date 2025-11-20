// ByteBridge Hero Component - Updated for deployment
import { motion } from 'framer-motion';
import { useMemo } from 'react';
// Using public folder for static assets in production
const logoImg = '/assets/bytebridge-logo.png';

const Hero = () => {
  // Generate stable particle positions
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28 lg:pt-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ scrollMarginTop: '100px' }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bytebridge-dark via-bytebridge-black to-bytebridge-dark"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-bytebridge-cyan rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Subtle background logo behind headline */}
          <img
            src={logoImg}
            alt="ByteBridge watermark"
            aria-hidden
            className="pointer-events-none select-none absolute left-1/2 top-1/2 -z-10 h-[280px] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.06] blur-[1px] mix-blend-overlay"
          />
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight"
          >
            <span className="text-white">We </span>
            <span className="text-gradient">Bridge </span>
            <span className="text-white">Creativity</span>
            <span className="text-white"> & </span>
            <span className="text-gradient">Technology</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-6"
          >
            Bespoke websites and mobile apps crafted in Stirling—engineered for speed,
            accessibility, and growth so your brand connects and converts.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-2 sm:mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/work.html', '_blank', 'noopener')}
              className="px-8 py-4 bg-gradient-to-r from-bytebridge-green to-bytebridge-cyan text-bytebridge-black font-bold rounded-lg text-lg flex items-center gap-2 group"
            >
              Start Your Project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/work.html', '_blank', 'noopener')}
              className="px-8 py-4 border-2 border-bytebridge-cyan text-bytebridge-cyan font-semibold rounded-lg text-lg hover:bg-bytebridge-cyan/10 transition-colors"
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Proof & process cards (replaces vanity metrics) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-bytebridge-cyan/20"
          >
            <motion.a
              href="/work.html"
              whileHover={{ y: -6, rotate: -0.25 }}
              whileTap={{ scale: 0.98 }}
              className="block rounded-2xl bg-gradient-to-br from-bytebridge-black to-bytebridge-dark border border-bytebridge-cyan/20 hover:border-bytebridge-cyan/50 p-6 text-left"
            >
              <div className="text-sm text-bytebridge-cyan mb-2">Production Launches</div>
              <div className="font-semibold text-white">Gurkha Lounge (live) + Kamdhenu (in development)</div>
              <p className="mt-3 text-gray-400 text-sm">Real clients, real results. See the work and how we build.</p>
              <div className="mt-4 inline-flex items-center gap-2 text-bytebridge-cyan text-sm">View projects <span>↗</span></div>
            </motion.a>

            <motion.div
              whileHover={{ y: -6, rotate: 0.25 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl bg-gradient-to-br from-bytebridge-black to-bytebridge-dark border border-bytebridge-cyan/20 hover:border-bytebridge-cyan/50 p-6"
            >
              <div className="text-sm text-bytebridge-cyan mb-2 font-bold">From Idea to Launch</div>
              <div className="font-bold text-white text-lg mb-4">We'll turn your dream into a website. Here’s how:</div>
              <div className="relative ml-3 mb-4">
                {/* Roadmap vertical bar */}
                <div className="absolute left-2 top-6 bottom-5 w-1 rounded bg-bytebridge-cyan/20"></div>
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-xl">💡</div><div><b>1. Plan</b>: Discovery, roadmap, and scope</div>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-xl">🎨</div><div><b>2. Design</b>: Wireframes & slick UI</div>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-xl">⚡</div><div><b>3. Build</b>: Fast, accessible code</div>
                </div>
                <div className="flex items-start gap-3 mb-1">
                  <div className="text-xl">🚀</div><div><b>4. Launch</b>: Live & ready stress free</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-block rounded bg-bytebridge-cyan/10 text-bytebridge-cyan px-3 py-1 text-xs font-semibold">Fast</span>
                <span className="inline-block rounded bg-bytebridge-green/10 text-bytebridge-green px-3 py-1 text-xs font-semibold">SEO & accessible</span>
                <span className="inline-block rounded bg-pink-400/10 text-pink-300 px-3 py-1 text-xs font-semibold">Modern stack</span>
              </div>
            </motion.div>

            <motion.a href="#contact" whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }}
              className="block rounded-2xl bg-gradient-to-br from-bytebridge-black to-bytebridge-dark border border-bytebridge-cyan/20 hover:border-bytebridge-cyan/50 p-6"
            >
              <div className="text-sm text-bytebridge-cyan mb-2 font-bold">Fast & Affordable</div>
              <div className="font-semibold text-white mb-3">Compare ByteBridge with agencies…</div>
              {/* Price comparison bar graph */}
              <div className="w-full max-w-xs mx-auto mt-2 mb-4 flex flex-col gap-2">
                <div className="flex items-center text-sm">
                  <div className="w-24">Other Agencies</div>
                  <div className="relative ml-4 flex items-center">
                    <div className="h-5 w-32 rounded-l bg-pink-400 flex items-center justify-end text-white text-xs font-bold pr-2">
                      £500+
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-24">ByteBridge</div>
                  <div className="relative ml-4 flex items-center">
                    <div className="h-5 w-8 rounded-l bg-bytebridge-cyan flex items-center justify-end text-black text-xs font-bold pr-2">
                      £50
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-white text-base font-bold">
                Get your professional site for as low as <span className='text-bytebridge-cyan'>£50</span> —<br/>
                agencies usually start from <span className='text-pink-400'>£500+</span>.
              </div>
              <div className="mt-1 text-xs text-gray-400">Pricing depends on scope (pages, features). We’ll give a clear fixed quote.</div>
              <div className="mt-3 inline-block px-3 py-1 bg-emerald-700/40 text-white text-xs rounded font-semibold">
                Often live in under a week!
              </div>
              <div className="mt-4 font-semibold text-bytebridge-cyan">Get a proposal and see how quick & easy it is</div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

