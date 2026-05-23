import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
            <span className="text-iron-cyan">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-iron-cyan mx-auto rounded-full shadow-[0_0_10px_#00F5FF]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-iron-red group-hover:shadow-[0_0_15px_#B11313] transition-all duration-300"></div>
            <h3 className="text-2xl font-orbitron text-iron-gold mb-4">Profile Overview</h3>
            <p className="text-gray-300 font-inter leading-relaxed mb-6">
              I am a passionate Frontend Developer and problem solver with a keen eye for creating premium, high-tech user interfaces. Inspired by futuristic design languages and modern web aesthetics, I build responsive, accessible, and cinematic web experiences.
            </p>
            <p className="text-gray-300 font-inter leading-relaxed">
              When I'm not coding, I'm analyzing data, optimizing workflows with Excel automation, or providing translation services. My goal is to merge logic and creativity into seamless digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-full border-2 border-iron-cyan/30 p-4 relative">
              <div className="absolute inset-0 rounded-full border border-iron-blue animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-iron-cyan relative bg-iron-dark/80 group/avatar">
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-0">
                   <div className="text-iron-cyan/50 font-orbitron text-xs mb-1">AWAITING UPLOAD</div>
                   <div className="text-iron-cyan/30 text-[10px]">public/ironman.jpg</div>
                 </div>
                 <img 
                   src="/ironman.jpg" 
                   alt="Iron Man" 
                   className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-100 group-hover/avatar:opacity-0 z-10" 
                 />
                 <img 
                   src="/profile.jpg" 
                   alt="Richi Paul" 
                   className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover/avatar:opacity-100 z-20" 
                 />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
