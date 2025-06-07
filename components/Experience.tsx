
const Experience = () => {
  const experiences = [
    {
      year: "January 2024 - Present",
      title: "Research Assistant",
      company: "Wireless Communication Lab - Mississippi State University",
      description: "Collaborating with NTIA to mitigate attacks on 5G wireless technologies. Implementing system design concepts to develop robust systems for detecting different types of attacks. Developed multi-threaded C++ systems to capture IQ signals, decode, and test different attacks.",
      technologies: ["C++", "C", "Python", "Linux", "5G Security"]
    },
    {
      year: "September 2024 - Present",
      title: "Research Assistant",
      company: "Agriculture Autonomy Institute - Mississippi State University",
      description: "Spearheading the development of modular safety mechanisms for farmers based on Power Take Off (PTO) driven farming equipment. Conducting interdisciplinary research to detect accidents and quickly stop heavy machinery based on pressure-based gloves.",
      technologies: ["Solidworks", "Fusion 360", "ESP32", "3D Printing", "CNC"]
    },
    {
      year: "June 2023 - July 2024",
      title: "Satellite Research Fellow",
      company: "Space Foundation Nepal - Kathmandu, Nepal",
      description: "Developed and worked on three Satellite Projects from Nepal: Munal, PHI-1, and Slippers2Sat. Implemented RTOS system for satellites, decreasing overhead software development time by 40%. Conducted practical labs at Central Engineering Campus of Tribhuvan University for 4th year students.",
      technologies: ["STM32", "RTOS", "PCB Design", "C/C++", "IoT", "Driver Development"]
    },
    {
      year: "August 2021 - May 2023",
      title: "Satellite Research Intern",
      company: "Space Foundation Nepal - Kathmandu",
      description: "Designed and programmed On-Board Computer for Munal CubeSat (Second ever Nepali Satellite) using STM32F4 MCU. Designed and developed Electrical Ground Support Equipment (EGSE) for Munal. Implemented micro-python on STM32 and integrated Tensorflow Lite in firmware.",
      technologies: ["STM32", "UART", "SPI", "I2C", "LoRa", "ROS2", "TensorFlow Lite"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My journey through research and development in embedded systems, satellite technology, and automation.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
              
              {/* Timeline indicator - visible on larger screens */}
              <div className="hidden lg:flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 h-16 bg-blue-200 dark:bg-blue-800 mt-4"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 w-full lg:max-w-md xl:max-w-lg">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm lg:text-base">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs lg:text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full self-start sm:self-center">
                      {exp.year}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm lg:text-base">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile timeline indicator */}
              <div className="lg:hidden flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white dark:border-slate-900 shadow-lg"></div>
                {index !== experiences.length - 1 && (
                  <div className="w-16 h-0.5 bg-blue-200 dark:bg-blue-800 ml-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
