
"use client";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "C", level: 88 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Embedded C", level: 92 },
        { name: "Bash", level: 75 },
        { name: "Ladder Logic", level: 70 }
      ]
    },
    {
      title: "Microcontrollers & Hardware",
      skills: [
        { name: "STM32", level: 95 },
        { name: "ESP32", level: 90 },
        { name: "Arduino", level: 85 },
        { name: "Raspberry Pi", level: 80 },
        { name: "PCB Design", level: 88 },
        { name: "3D Printing", level: 82 },
        { name: "CNC", level: 75 },
        { name: "Soldering", level: 90 }
      ]
    },
    {
      title: "Software & Frameworks",
      skills: [
        { name: "FreeRTOS", level: 92 },
        { name: "PX4", level: 85 },
        { name: "Linux", level: 88 },
        { name: "ROS2", level: 80 },
        { name: "TensorFlow Lite", level: 75 },
        { name: "Docker", level: 78 },
        { name: "CMake", level: 82 }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Fusion 360", level: 88 },
        { name: "Solidworks", level: 85 },
        { name: "Git & GitHub", level: 90 },
        { name: "Eagle PCB", level: 85 },
        { name: "Gazebo", level: 75 }
      ]
    }
  ];

  const specializations = [
    "Firmware Development",
    "Bootloader Development", 
    "OS & Middlewares",
    "Inter-Process Communication",
    "OTA Updates",
    "Embedded File Systems"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My technical expertise spans across embedded systems, software development, and hardware design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 text-center hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        

        {/* Research & Publications section */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Research & Publications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <a
                href="#"
                className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  CubeOS: PX4 Autopilot-inspired Flight Software
                </h4>
              </a>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                Flight software for Nepal's next-generation CubeSat bus
              </p>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Published October 2024
              </span>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <a
                href="#"
                className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Enhancing 5G Security via Error-Pattern Steganography
                </h4>
              </a>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                Practical evaluation on COTS UEs
              </p>
              <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                Under Review
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
