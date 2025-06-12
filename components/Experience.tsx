
"use client";

import { useState } from 'react';

const RoadmapSection = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const sections = [
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'skills', name: 'Skills', icon: '⚡' },
    { id: 'research', name: 'Research & Publications', icon: '📚' }
  ];

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

  const education = [
    {
      year: "August 2024 - August 2027",
      title: "Bachelor's in Computer Engineering",
      company: "Mississippi State University",
      description: "Currently pursuing Computer Engineering with focus on Controls Systems Engineering, Automation, Hardware/Software Development, and Embedded Systems/Firmware development.",
      technologies: ["GPA: 4.0/4.0"],
      gpa: "4.0/4.0"
    }
  ];

  const projects = [
    {
      year: "2024",
      title: "5G Security Enhancement System",
      company: "Research Project",
      description: "Developed robust systems for detecting and mitigating various types of attacks on 5G wireless technologies using multi-threaded C++ architecture.",
      technologies: ["C++", "Signal Processing", "5G", "Security"]
    },
    {
      year: "2024",
      title: "Agricultural Safety Mechanism",
      company: "AAI Research",
      description: "Created modular safety system for PTO-driven farming equipment with pressure-based detection gloves and automatic machinery shutdown capabilities.",
      technologies: ["ESP32", "Solidworks", "Fusion 360", "3D Printing"]
    },
    {
      year: "2023-2024",
      title: "Satellite Projects (Munal, PHI-1, Slippers2Sat)",
      company: "Space Foundation Nepal",
      description: "Developed on-board computers and RTOS systems for three different satellite projects, including Nepal's second CubeSat mission.",
      technologies: ["STM32", "RTOS", "PCB Design", "Embedded Systems"]
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["C/C++", "Python", "JavaScript", "TypeScript", "VHDL", "Assembly"]
    },
    {
      category: "Embedded Systems",
      items: ["STM32", "ESP32", "Arduino", "RTOS", "Firmware Development", "Driver Development"]
    },
    {
      category: "Hardware Design",
      items: ["PCB Design", "Solidworks", "Fusion 360", "Eagle", "KiCad", "3D Printing", "CNC"]
    },
    {
      category: "Communication Protocols",
      items: ["UART", "SPI", "I2C", "LoRa", "5G", "Wireless Communication"]
    },
    {
      category: "Software & Tools",
      items: ["Linux", "ROS2", "TensorFlow Lite", "Git", "Docker", "MATLAB"]
    },
    {
      category: "Specializations",
      items: ["Controls Systems", "Automation", "5G Security", "Satellite Technology", "IoT"]
    }
  ];

  const research = [
    {
      title: "Enhancing 5G Security via Error-Pattern Steganography",
      description: "Practical evaluation on COTS UEs",
      status: "Under Review",
      year: "2024",
      link: "#"
    },
    {
      title: "Modular Safety Systems for Agricultural Equipment",
      description: "Pressure-based detection and automatic shutdown mechanisms",
      status: "In Progress",
      year: "2024",
      link: "#"
    },
    {
      title: "RTOS Implementation for CubeSat Systems",
      description: "Reducing software development overhead in satellite systems",
      status: "Published",
      year: "2023",
      link: "#"
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'experience':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
                onClick={() => console.log('Experience clicked:', exp.title)}
              >
                <div className="flex flex-col mb-4">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full self-start mb-3">
                    {exp.year}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
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
            ))}
          </div>
        );

      case 'education':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Education</h3>
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
                onClick={() => console.log('Education clicked:', edu.title)}
              >
                <div className="flex flex-col mb-4">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full self-start mb-3">
                    {edu.year}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {edu.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {edu.company}
                  </p>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-bold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Featured Projects</h3>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
                  onClick={() => console.log('Project clicked:', project.title)}
                >
                  <div className="flex flex-col mb-4">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full self-start mb-3">
                      {project.year}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {project.company}
                    </p>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Technical Skills</h3>
            <div className="grid gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'research':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Research & Publications</h3>
            <div className="grid gap-6">
              {research.map((paper, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-start mb-3">
                    <a 
                      href={paper.link} 
                      className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      onClick={() => console.log('Research paper clicked:', paper.title)}
                    >
                      {paper.title}
                    </a>
                    <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                      {paper.year}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                    {paper.description}
                  </p>
                  
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    paper.status === 'Published' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : paper.status === 'Under Review'
                      ? 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200'
                      : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                  }`}>
                    {paper.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore my professional journey, education, projects, and research contributions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 sticky top-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Roadmap</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                      activeSection === section.id
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <span className="font-medium">{section.name}</span>
                    {activeSection === section.id && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:w-3/4">
            <div className="min-h-[600px]">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
