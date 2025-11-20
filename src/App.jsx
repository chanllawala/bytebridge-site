import { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './App.css';

// Lazy load components
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bytebridge-dark">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Services />
            <About />
            <Contact />
          </Suspense>
        </main>
        {/* Sticky CTA */}
        <a
          href="#contact"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-white text-bytebridge-black px-5 py-3 font-semibold shadow-xl shadow-bytebridge-cyan/40 hover:shadow-bytebridge-red/40 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bytebridge-red/60"
        >
          Let's Talk
        </a>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
