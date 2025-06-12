
import { useState } from 'react';

const Experience = () => {
  const experiences = [
    {
      year: "January 2024 - Present",
      title: "Research Assistant",
      company: "Wireless Communication Lab - Mississippi State University",
      description: "Collaborating with NTIA to mitigate attacks on 5G wireless technologies. Implementing system design concepts to develop robust systems for detecting different types of attacks. Developed multi-threaded C++ systems to capture IQ signals, decode, and test different attacks.",
      technologies: ["C++", "C", "Python", "Linux", "5G Security"],
      details: "Working closely with the National Telecommunications and Information Administration (NTIA) on critical 5G security research. Developed comprehensive attack detection systems using advanced signal processing techniques. Created multi-threaded applications capable of real-time IQ signal analysis and attack pattern recognition."
    },
    {
      year: "September 2024 - Present",
      title: "Research Assistant",
      company: "Agriculture Autonomy Institute - Mississippi State University",
      description: "Spearheading the development of modular safety mechanisms for farmers based on Power Take Off (PTO) driven farming equipment. Conducting interdisciplinary research to detect accidents and quickly stop heavy machinery based on pressure-based gloves.",
      technologies: ["Solidworks", "Fusion 360", "ESP32", "3D Printing", "CNC"],
      details: "Leading a critical safety initiative for agricultural automation. Designed and prototyped pressure-sensitive glove systems that can instantly detect operator distress and automatically engage emergency stops on heavy farming machinery. Utilized advanced CAD design, embedded programming, and rapid prototyping techniques."
    },
    {
      year: "June 2023 - July 2024",
      title: "Satellite Research Fellow",
      company: "Space Foundation Nepal - Kathmandu, Nepal",
      description: "Developed and worked on three Satellite Projects from Nepal: Munal, PHI-1, and Slippers2Sat. Implemented RTOS system for satellites, decreasing overhead software development time by 40%. Conducted practical labs at Central Engineering Campus of Tribhuvan University for 4th year students.",
      technologies: ["STM32", "RTOS", "PCB Design", "C/C++", "IoT", "Driver Development"],
      details: "Contributed to Nepal's space technology advancement through multiple satellite missions. Developed efficient real-time operating systems that significantly reduced development overhead. Mentored university students through hands-on satellite development workshops, sharing practical knowledge in embedded systems and space technology."
    },
    {
      year: "August 2021 - May 2023",
      title: "Satellite Research Intern",
      company: "Space Foundation Nepal - Kathmandu",
      description: "Designed and programmed On-Board Computer for Munal CubeSat (Second ever Nepali Satellite) using STM32F4 MCU. Designed and developed Electrical Ground Support Equipment (EGSE) for Munal. Implemented micro-python on STM32 and integrated Tensorflow Lite in firmware.",
      technologies: ["STM32", "UART", "SPI", "I2C", "LoRa", "ROS2", "TensorFlow Lite"],
      details: "Played a pivotal role in Nepal's second satellite mission. Architected the complete on-board computer system using advanced microcontroller programming. Innovated by implementing machine learning capabilities directly in satellite firmware, enabling intelligent autonomous operations in space."
    }
  ];

  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

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

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg transform -translate-x-1/2 z-10"></div>
                
                {/* Content - alternating sides */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'ml-auto pl-8'}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col mb-4">
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full self-start mb-3">
                        {exp.year}
                      </span>
                      <h3 
                        className="text-xl font-bold text-slate-900 dark:text-white mb-1 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={() => toggleExpansion(index)}
                      >
                        {exp.title}
                        <span className="ml-2 text-sm">
                          {expandedExperience === index ? '▼' : '▶'}
                        </span>
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {expandedExperience === index && (
                      <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg border-l-4 border-blue-600">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {exp.details}
                        </p>
                      </div>
                    )}
                    
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
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col mb-4">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full self-start mb-3">
                    {exp.year}
                  </span>
                  <h3 
                    className="text-xl font-bold text-slate-900 dark:text-white mb-1 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => toggleExpansion(index)}
                  >
                    {exp.title}
                    <span className="ml-2 text-sm">
                      {expandedExperience === index ? '▼' : '▶'}
                    </span>
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                {expandedExperience === index && (
                  <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg border-l-4 border-blue-600">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {exp.details}
                    </p>
                  </div>
                )}
                
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
