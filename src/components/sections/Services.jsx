import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaTable, FaLanguage } from 'react-icons/fa';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, high-performance web applications using modern frameworks like React and Vite.',
    icon: <FaLaptopCode className="text-4xl text-iron-cyan" />
  },
  {
    title: 'Responsive Design',
    description: 'Creating adaptive layouts that provide seamless user experiences across all devices and screen sizes.',
    icon: <FaMobileAlt className="text-4xl text-iron-blue" />
  },
  {
    title: 'Excel Data Entry',
    description: 'Accurate and efficient data processing, analysis, and automation using advanced Excel techniques.',
    icon: <FaTable className="text-4xl text-[#217346]" />
  },
  {
    title: 'Translation Services',
    description: 'Precise and culturally contextual translation to help your content reach a global audience.',
    icon: <FaLanguage className="text-4xl text-iron-gold" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative z-10 bg-iron-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
            <span className="text-iron-gold">04.</span> Protocol Services
          </h2>
          <div className="w-24 h-1 bg-iron-gold mx-auto rounded-full shadow-[0_0_10px_#D4AF37]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-8 rounded-xl relative overflow-hidden group border border-white/5 hover:border-iron-gold transition-all duration-300"
            >
              {/* Holographic background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-iron-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-start gap-6 relative z-10">
                <div className="p-4 bg-iron-black/50 rounded-lg border border-white/10 group-hover:border-iron-gold/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-orbitron text-white mb-2 group-hover:text-iron-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-inter leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
