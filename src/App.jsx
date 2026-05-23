import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/layout/CustomCursor';
import ParticleBackground from './components/ui/ParticleBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[999] bg-iron-black flex flex-col items-center justify-center"
          >
            <div className="w-32 h-32 relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 rounded-full border-t-2 border-iron-cyan animate-[spin_1s_linear_infinite]"></div>
              <div className="absolute inset-2 rounded-full border-r-2 border-iron-blue animate-[spin_2s_linear_infinite_reverse]"></div>
              <div className="absolute inset-4 rounded-full border-b-2 border-iron-red animate-[spin_3s_linear_infinite]"></div>
              <div className="text-iron-cyan font-orbitron text-xs animate-pulse">INIT</div>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-1 bg-iron-cyan shadow-[0_0_10px_#00F5FF] rounded-full"
            />
            <p className="mt-4 text-iron-cyan font-orbitron text-sm uppercase tracking-widest animate-pulse">
              Booting J.A.R.V.I.S. Protocol...
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <ParticleBackground />
            <Navbar />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Services />
              <Contact />
            </main>

            <footer className="py-8 text-center border-t border-white/10 glass-panel">
              <p className="text-gray-500 font-orbitron text-sm">
                &copy; {new Date().getFullYear()} Richi Paul. System Online.
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
