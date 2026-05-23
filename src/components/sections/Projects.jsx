import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'RoadSOS',
    description: 'A comprehensive emergency roadside assistance platform built with modern web technologies.',
    tech: ['React', 'Tailwind CSS', 'Node.js'],
    github: '#',
    live: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Cinematic JARVIS-inspired personal portfolio with Framer Motion animations and premium UI.',
    tech: ['React', 'Vite', 'Framer Motion'],
    github: '#',
    live: '#'
  },
  {
    title: 'Excel Automation Project',
    description: 'Advanced data entry automation and processing system using Excel macros and logic.',
    tech: ['Excel VBA', 'Data Analysis', 'Automation'],
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
            <span className="text-iron-red">03.</span> Mission Archives
          </h2>
          <div className="w-24 h-1 bg-iron-red mx-auto rounded-full shadow-[0_0_10px_#B11313]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-panel rounded-xl overflow-hidden group border border-white/5 hover:border-iron-red transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-iron-dark/80 relative overflow-hidden flex items-center justify-center border-b border-white/10 group-hover:border-iron-red/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-iron-black/80 to-transparent z-10"></div>
                <div className="text-iron-red/30 font-orbitron text-xl">VISUAL DATA</div>
                <div className="absolute top-0 left-0 w-full h-full bg-iron-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-orbitron text-white mb-3 group-hover:text-iron-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-inter text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-orbitron text-iron-cyan bg-iron-cyan/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-orbitron">
                    <FaGithub /> Source
                  </a>
                  <a href={project.live} className="text-gray-400 hover:text-iron-cyan transition-colors flex items-center gap-2 text-sm font-orbitron">
                    <FaExternalLinkAlt /> Deploy
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
