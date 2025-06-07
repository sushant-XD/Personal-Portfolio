
"use client";

const Projects = () => {
  const projects = [
    {
      title: "Munal CubeSat - Nepal's Second Satellite",
      description: "Designed and programmed On-Board Computer for Nepal's second satellite using STM32F4 MCU. Implemented communication systems, antenna tuning, and LoRa implementation. Integrated micro-python and TensorFlow Lite into firmware.",
      technologies: ["STM32", "C/C++", "TensorFlow Lite", "LoRa", "UART/SPI/I2C", "Python"],
      image: "/images/photo-1.jpg",
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "CubeOS - PX4 Autopilot-inspired Flight Software",
      description: "Developed flight software for Nepal's next-generation CubeSat bus, inspired by PX4 Autopilot architecture. Implemented RTOS system reducing overhead software development time by 40%.",
      technologies: ["RTOS", "C++", "Embedded Systems", "Flight Control", "Real-time Systems"],
      image: "/images/photo-2.jpg",
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "5G Security Research - Error-Pattern Steganography",
      description: "Collaboration with NTIA to enhance 5G security through error-pattern steganography. Developed multi-threaded C++ systems to capture IQ signals, decode, and test different attack vectors on COTS UEs.",
      technologies: ["C++", "5G Security", "Signal Processing", "Multi-threading", "Linux"],
      image: "/images/photo-3.jpg",
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "PTO Safety Mechanism for Farm Equipment",
      description: "Spearheaded development of modular safety mechanism for farmers using Power Take Off driven equipment. Created pressure-based glove system to detect accidents and automatically stop heavy machinery.",
      technologies: ["ESP32", "Solidworks", "Fusion 360", "3D Printing", "CNC", "Safety Systems"],
      image: "/images/photo-1.jpg",
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      title: "Electrical Ground Support Equipment (EGSE)",
      description: "Designed and developed comprehensive EGSE for Munal CubeSat including PCB design, soldering, and testing infrastructure. Created testing protocols for satellite subsystems.",
      technologies: ["PCB Design", "Eagle", "Testing Protocols", "Hardware Debugging"],
      image: "/images/photo-2.jpg",
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      title: "Multi-Satellite Project Portfolio",
      description: "Worked on three satellite projects from Nepal: Munal, PHI-1, and Slippers2Sat. Contributed to various subsystems including communication, power management, and on-board computing.",
      technologies: ["Satellite Systems", "STM32", "Communication Protocols", "Power Management"],
      image: "/images/photo-3.jpg",
      liveLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my key projects spanning satellite development, embedded systems, 
            and cutting-edge research in 5G security and automation.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href={project.githubLink}
                    className="p-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <svg className="w-5 h-5 text-slate-600 dark:text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Additional Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
              >
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 px-2 py-1">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.liveLink}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    Learn More →
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
