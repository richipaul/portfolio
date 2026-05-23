import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
            <span className="text-iron-cyan">05.</span> Establish Uplink
          </h2>
          <div className="w-24 h-1 bg-iron-cyan mx-auto rounded-full shadow-[0_0_10px_#00F5FF]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-iron-cyan"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-iron-cyan"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-iron-cyan"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-iron-cyan"></div>

            <h3 className="text-2xl font-orbitron text-iron-cyan mb-6 glow-text">Secure Channel</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 font-orbitron text-sm mb-2 uppercase tracking-widest">
                  Designation
                </label>
                <input
                  type="text"
                  className="w-full bg-iron-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-iron-cyan focus:shadow-[0_0_10px_#00F5FF] transition-all font-inter"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label className="block text-gray-400 font-orbitron text-sm mb-2 uppercase tracking-widest">
                  Comms Link
                </label>
                <input
                  type="email"
                  className="w-full bg-iron-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-iron-cyan focus:shadow-[0_0_10px_#00F5FF] transition-all font-inter"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label className="block text-gray-400 font-orbitron text-sm mb-2 uppercase tracking-widest">
                  Transmission
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-iron-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-iron-cyan focus:shadow-[0_0_10px_#00F5FF] transition-all font-inter resize-none"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-4 bg-iron-cyan/10 border border-iron-cyan text-iron-cyan font-orbitron uppercase tracking-widest hover:bg-iron-cyan hover:text-iron-black hover:glow-border transition-all duration-300 rounded"
              >
                Transmit Data
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-panel p-8 rounded-2xl relative group hover:border-iron-blue transition-colors duration-300">
              <h3 className="text-2xl font-orbitron text-iron-blue mb-8 glow-text">Network Nodes</h3>
              <div className="grid grid-cols-2 gap-6">
                <a href="#" className="flex flex-col items-center justify-center p-6 bg-iron-black/40 rounded-lg border border-white/5 hover:border-iron-cyan hover:shadow-[0_0_15px_#00F5FF] transition-all duration-300 group/link">
                  <FaGithub className="text-4xl text-gray-400 group-hover/link:text-white mb-3 transition-colors" />
                  <span className="font-orbitron text-sm text-gray-400 group-hover/link:text-iron-cyan transition-colors">GitHub</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center p-6 bg-iron-black/40 rounded-lg border border-white/5 hover:border-[#0A66C2] hover:shadow-[0_0_15px_#0A66C2] transition-all duration-300 group/link">
                  <FaLinkedin className="text-4xl text-gray-400 group-hover/link:text-[#0A66C2] mb-3 transition-colors" />
                  <span className="font-orbitron text-sm text-gray-400 group-hover/link:text-[#0A66C2] transition-colors">LinkedIn</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center p-6 bg-iron-black/40 rounded-lg border border-white/5 hover:border-[#1DBF73] hover:shadow-[0_0_15px_#1DBF73] transition-all duration-300 group/link">
                  <SiFiverr className="text-4xl text-gray-400 group-hover/link:text-[#1DBF73] mb-3 transition-colors" />
                  <span className="font-orbitron text-sm text-gray-400 group-hover/link:text-[#1DBF73] transition-colors">Fiverr</span>
                </a>
                <a href="mailto:richipaul8f25@gmail.com" className="flex flex-col items-center justify-center p-6 bg-iron-black/40 rounded-lg border border-white/5 hover:border-iron-red hover:shadow-[0_0_15px_#B11313] transition-all duration-300 group/link">
                  <FaEnvelope className="text-4xl text-gray-400 group-hover/link:text-iron-red mb-3 transition-colors" />
                  <span className="font-orbitron text-sm text-gray-400 group-hover/link:text-iron-red transition-colors">Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
