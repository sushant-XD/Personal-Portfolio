
"use client";

import { useState, useEffect, useRef } from 'react';

const RoadmapSection = () => {
  const [activeSection, setActiveSection] = useState('experience');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { id: 'experience', name: 'Work Experience', icon: '💼' },
    { id: 'education', name: 'Education and Certification', icon: '🎓' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'skills', name: 'Skills', icon: '⚡' },
    { id: 'research', name: 'Achievement and Publication', icon: '📚' }
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
    }
  ];

  const education = [
    {
      year: "August 2024 - August 2027",
      title: "Bachelor's in Computer Engineering",
      company: "Mississippi State University, Mississippi State, MS",
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = sectionsRef.current[section.id];
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      const elementTop = element.offsetTop - 100;
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  };

  const renderContent = (sectionId: string) => {
    switch (sectionId) {
      case 'experience':
        return (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">Work Experience</h3>
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
                onClick={() => console.log('Experience clicked:', exp.title)}
              >
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white dark:text-slate-900 font-bold text-lg">MSU</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">
                      {exp.year}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
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
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">Education and Certification</h3>
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
                onClick={() => console.log('Education clicked:', edu.title)}
              >
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white dark:text-slate-900 font-bold text-lg">MSU</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">
                      {edu.year}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {edu.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      {edu.company}
                    </p>
                  </div>
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
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">Projects</h3>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
                  onClick={() => console.log('Project clicked:', project.title)}
                >
                  <div className="flex flex-col mb-4">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {project.year}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
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
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">Skills</h3>
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
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">Achievement and Publication</h3>
            <div className="grid gap-6">
              {research.map((paper, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-start mb-3">
                    <a 
                      href={paper.link} 
                      className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer flex-1"
                      onClick={() => console.log('Research paper clicked:', paper.title)}
                    >
                      {paper.title}
                    </a>
                    <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded ml-4">
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Fixed Navigation */}
          <div className="lg:w-1/4">
            <div className="lg:sticky lg:top-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                        activeSection === section.id
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-l-4 border-blue-600 font-semibold'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span className="font-medium">{section.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:w-3/4">
            <div className="space-y-20">
              {sections.map((section) => (
                <div
                  key={section.id}
                  ref={(el) => {
                    sectionsRef.current[section.id] = el;
                  }}
                  className="min-h-screen"
                >
                  {renderContent(section.id)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
