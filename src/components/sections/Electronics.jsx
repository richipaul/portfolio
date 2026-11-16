import { motion } from 'framer-motion';
import { 
  FaCar, 
  FaRobot, 
  FaHome, 
  FaBolt, 
  FaWater, 
  FaSun, 
  FaMicrochip,
  FaCheckCircle,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

const electronicsProjects = [
  {
    id: '01',
    sysId: 'ROBO-CAR-V1',
    title: 'Robotic Car',
    category: 'Autonomous Vehicle & Robotics',
    description: 'Autonomous obstacle-avoiding robotic vehicle equipped with ultrasonic rangefinders, L298N H-bridge motor driver, and Bluetooth telemetry for dual autonomous and manual RC navigation.',
    icon: <FaCar className="text-3xl text-iron-cyan group-hover:scale-110 transition-transform duration-300" />,
    specs: '5V-9V DC | PWM Dual H-Bridge | HC-SR04 Rangefinder',
    highlights: [
      'Real-time ultrasonic collision avoidance logic',
      'Dual DC gear motor differential steering via L298N',
      'Bluetooth serial module for remote smartphone control'
    ],
    tech: ['Arduino Uno', 'L298N Driver', 'Ultrasonic HC-SR04', 'Bluetooth HC-05', 'C++ / Embedded'],
    status: 'Operational',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30',
    github: 'https://github.com/richipaul',
    demo: '#'
  },
  {
    id: '02',
    sysId: 'BIO-HAND-V2',
    title: 'Robotic Hand',
    category: 'Biomechatronics & Prosthetics',
    description: 'Anthropomorphic 5-finger bio-mimetic robotic hand actuated by micro servomotors. Mimics human hand kinematics and grip strength via tensioned tendon cables and flex-sensor glove synchronization.',
    icon: <FaRobot className="text-3xl text-iron-blue group-hover:scale-110 transition-transform duration-300" />,
    specs: '5x SG90 Micro Servos | Flex Sensor Telemetry | 5-DOF Articulation',
    highlights: [
      '5 independent degrees of freedom for natural gripping',
      'Wearable sensor glove for wireless gesture mirroring',
      'Calibrated tendon return mechanics with variable torque'
    ],
    tech: ['Arduino / ESP32', 'SG90 Servos', 'Flex Sensors', 'Tendon Mechanics', 'Biomedical C++'],
    status: 'Operational',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30',
    github: 'https://github.com/richipaul',
    demo: '#'
  },
  {
    id: '03',
    sysId: 'DOMUS-IOT-V1',
    title: 'Home Automation',
    category: 'IoT & Smart Infrastructure',
    description: 'Wi-Fi-connected IoT smart home system enabling automated switching and remote monitoring of high-voltage AC appliances with relay galvanic isolation, mobile app sync, and manual override.',
    icon: <FaHome className="text-3xl text-iron-gold group-hover:scale-110 transition-transform duration-300" />,
    specs: '220V AC Switching | 2.4GHz Wi-Fi 802.11 b/g/n | Multi-Channel Relays',
    highlights: [
      'Multi-channel optocoupler relay isolation for safety',
      'Cloud IoT dashboard (Blynk / MQTT) with live state feedback',
      'Dual control via smartphone application and manual wall switches'
    ],
    tech: ['ESP8266 / NodeMCU', 'Relay Modules', 'Blynk IoT', 'MQTT Protocol', 'Wi-Fi'],
    status: 'Operational',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30',
    github: 'https://github.com/richipaul',
    demo: '#'
  },
  {
    id: '04',
    sysId: 'METER-GRID-V1',
    title: 'Smart Metering System',
    category: 'Energy Telemetry & Smart Grid',
    description: 'Digital IoT electrical energy meter measuring instantaneous AC current (via Hall-effect sensor), mains voltage, active power, and cumulative kilowatt-hour (kWh) usage with cloud diagnostics.',
    icon: <FaBolt className="text-3xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    specs: 'ACS712 Current Sensing | True-RMS Calculation | I2C Telemetry',
    highlights: [
      'Real-time True-RMS current sensing with overcurrent detection',
      'I2C 16x2 alphanumeric LCD for immediate local metrics',
      'Automated kWh power consumption logging and cloud telemetry'
    ],
    tech: ['ACS712 Sensor', 'ESP32 / Arduino', 'I2C LCD 1602', 'Cloud Telemetry', 'Embedded C'],
    status: 'Operational',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30',
    github: 'https://github.com/richipaul',
    demo: '#'
  },
  {
    id: '05',
    sysId: 'HYDRO-LVL-V1',
    title: 'Water Level Sensor',
    category: 'Fluid Dynamics & Automated Control',
    description: 'Precision automated water reservoir monitoring system using non-contact ultrasonic distance sensing. Automatically regulates pump relays to eliminate dry-running and prevent tank overflow.',
    icon: <FaWater className="text-3xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
    specs: 'Non-contact Ultrasonic Echo | Pump Relay Cutoff | Audio-Visual Alarms',
    highlights: [
      'Continuous depth measurement and fluid percentage tracking',
      'Automated high/low threshold switching for water pump',
      'Audible buzzer warning and status LEDs for dry-run protection'
    ],
    tech: ['Ultrasonic Sensor', 'Pump Relay Module', 'Piezo Buzzer', 'Microcontroller', 'Status LEDs'],
    status: 'Operational',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30',
    github: 'https://github.com/richipaul',
    demo: '#'
  },
  {
    id: '06',
    sysId: 'SOLAR-TRK-V1',
    title: 'Solar Tracking System',
    category: 'Clean Energy & Solar Robotics',
    description: 'Automated dual-axis solar tracking platform featuring light-dependent resistor (LDR) quadrant arrays. Continuously calculates sun azimuth and elevation to maximize photovoltaic energy generation.',
    icon: <FaSun className="text-3xl text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
    specs: 'Dual-Axis Azimuth & Elevation | 4x LDR Quadrants | Dual Servo Drive',
    highlights: [
      'Quadrant differential LDR comparative tracking algorithm',
      'Dual-axis servomotors for complete solar zenith alignment',
      'Up to 35% higher energy yield compared to stationary solar panels'
    ],
    tech: ['Arduino Uno', 'LDR Sensors', 'Dual Servo Actuators', 'Solar PV Cell', 'Power Regulation'],
    status: 'Operational',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30',
    github: 'https://github.com/richipaul',
    demo: '#'
  }
];

const Electronics = () => {
  return (
    <section id="electronics" className="py-20 relative z-10 bg-iron-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-iron-cyan/30 glass-panel mb-4">
            <FaMicrochip className="text-iron-cyan text-xs animate-pulse" />
            <span className="text-iron-cyan font-orbitron text-xs tracking-widest uppercase">
              Embedded Systems & Cybernetics
            </span>
          </div>

          <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
            <span className="text-iron-cyan">04.</span> Electronics Projects
          </h2>
          <div className="w-24 h-1 bg-iron-cyan mx-auto rounded-full shadow-[0_0_10px_#00F5FF]"></div>
          
          <p className="mt-4 text-gray-400 font-inter text-sm max-w-2xl mx-auto">
            Hardware prototyping, microcontrollers, IoT automation, and intelligent robotics engineered with precision circuitry and embedded logic.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {electronicsProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-xl overflow-hidden group border border-white/5 hover:border-iron-cyan hover:shadow-[0_0_25px_rgba(0,245,255,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual HUD Header */}
                <div className="h-44 bg-iron-dark/90 relative overflow-hidden flex flex-col justify-between p-4 border-b border-white/10 group-hover:border-iron-cyan/40 transition-colors">
                  {/* Background Grid Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00F5FF_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-iron-black/90 via-transparent to-transparent z-0"></div>

                  {/* Top Bar of HUD */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-orbitron text-[11px] text-iron-cyan tracking-wider font-semibold">
                      // {project.sysId}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-orbitron uppercase tracking-wider border ${project.statusColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Center Holographic Icon & Ring */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-iron-cyan/30 bg-iron-black/60 group-hover:border-iron-cyan group-hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all duration-300">
                      <div className="absolute inset-0 rounded-full border border-dashed border-iron-blue/40 animate-[spin_12s_linear_infinite]"></div>
                      {project.icon}
                    </div>
                  </div>

                  {/* Bottom Specs Micro-Bar */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-orbitron text-gray-400 border-t border-white/5 pt-2">
                    <span className="truncate">{project.specs}</span>
                    <span className="text-iron-cyan/60 ml-2">SPEC #{project.id}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category & Title */}
                  <div className="mb-3">
                    <span className="text-[11px] font-orbitron uppercase tracking-widest text-iron-cyan/80 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-iron-cyan transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 font-inter text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5 space-y-1.5">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-400 font-inter">
                        <FaCheckCircle className="text-iron-cyan text-[10px] mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="text-[11px] font-orbitron text-iron-cyan bg-iron-cyan/10 border border-iron-cyan/20 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-orbitron uppercase tracking-wider"
                >
                  <FaGithub className="text-sm" /> Firmware / Code
                </a>
                <a
                  href={project.demo}
                  onClick={(e) => {
                    if (project.demo === '#') {
                      e.preventDefault();
                    }
                  }}
                  className="text-iron-cyan hover:text-white transition-colors flex items-center gap-1.5 text-xs font-orbitron uppercase tracking-wider"
                >
                  <FaExternalLinkAlt className="text-xs" /> Schematics
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Electronics;
