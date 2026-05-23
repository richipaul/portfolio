import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaFileExcel, FaLanguage } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { BsKeyboardFill } from 'react-icons/bs';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" />, level: 90 },
  { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" />, level: 85 },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 80 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 95 },
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, level: 75 },
  { name: 'Excel', icon: <FaFileExcel className="text-[#217346]" />, level: 90 },
  { name: 'Data Entry', icon: <BsKeyboardFill className="text-gray-400" />, level: 95 },
  { name: 'Translation', icon: <FaLanguage className="text-iron-cyan" />, level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10 bg-iron-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
            <span className="text-iron-cyan">02.</span> Core Competencies
          </h2>
          <div className="w-24 h-1 bg-iron-cyan mx-auto rounded-full shadow-[0_0_10px_#00F5FF]"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-panel p-6 rounded-xl border border-iron-cyan/20 hover:border-iron-cyan hover:shadow-[0_0_20px_#00F5FF] transition-all duration-300 flex flex-col items-center justify-center group"
            >
              <div className="text-5xl mb-4 group-hover:animate-pulse">
                {skill.icon}
              </div>
              <h3 className="text-lg font-orbitron text-gray-200 group-hover:text-white transition-colors">
                {skill.name}
              </h3>
              
              {/* Progress Bar */}
              <div className="w-full mt-4 h-1.5 bg-iron-black rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                  className="h-full bg-iron-cyan shadow-[0_0_10px_#00F5FF]"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
