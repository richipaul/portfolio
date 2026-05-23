import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Frontend Developer", "Freelancer", "Problem Solver"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, typingSpeed]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(1000); // Pause at end
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Arc Reactor Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-iron-cyan/20 flex items-center justify-center animate-[pulse-glow_4s_ease-in-out_infinite]">
        <div className="w-72 h-72 rounded-full border-2 border-iron-blue/30 flex items-center justify-center animate-[pulse-glow_3s_ease-in-out_infinite_reverse]">
          <div className="w-48 h-48 rounded-full border border-iron-cyan/50 animate-[spin_10s_linear_infinite] border-dashed"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-6 py-2 rounded-full border border-iron-cyan/30 glass-panel"
        >
          <span className="text-iron-cyan font-orbitron tracking-widest text-sm uppercase">
            System Initialization Complete
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron"
        >
          Hi, I'm <span className="text-iron-cyan glow-text">Richi Paul</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 mb-8"
        >
          <h2 className="text-2xl md:text-4xl text-gray-300 font-poppins">
            <span className="text-iron-blue">|</span> {text}
            <span className="animate-pulse">_</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-md bg-iron-cyan/10 border border-iron-cyan text-iron-cyan font-orbitron hover:bg-iron-cyan hover:text-iron-black hover:glow-border transition-all duration-300 uppercase tracking-widest"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-md bg-transparent border border-iron-red text-iron-red font-orbitron hover:bg-iron-red hover:text-white hover:shadow-[0_0_15px_#B11313] transition-all duration-300 uppercase tracking-widest"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* HUD Elements */}
      <div className="hidden md:block absolute top-1/4 left-10 text-iron-cyan/50 font-orbitron text-xs">
        <p>SYS.REQ: OPTIMAL</p>
        <p>PWR.LVL: 100%</p>
        <p>NET.UPLINK: SECURE</p>
      </div>
      <div className="hidden md:block absolute bottom-1/4 right-10 text-iron-cyan/50 font-orbitron text-xs text-right">
        <p>TARGET ACQUIRED</p>
        <p>INITIATING PROTOCOL</p>
      </div>
    </section>
  );
};

export default Hero;
