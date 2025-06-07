
"use client";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "C", "JavaScript", "Embedded C", "Bash", "Python", "Ladder Logic"]
    },
    {
      title: "Microcontrollers & Hardware",
      skills: ["STM32", "ESP32", "Arduino", "Raspberry Pi", "PCB Design", "3D Printing", "CNC", "Soldering"]
    },
    {
      title: "Software & Frameworks",
      skills: ["FreeRTOS", "PX4", "POSIX", "Linux", "ROS2", "TensorFlow Lite", "Docker", "CMake"]
    },
    {
      title: "Design & Tools",
      skills: ["Autodesk Fusion 360", "Solidworks", "Git & GitHub", "Eagle PCB", "Gazebo"]
    },
    {
      title: "Specialized Systems",
      skills: ["Firmware Development", "Bootloader Development", "OS & Middlewares", "IPC", "OTA Updates", "Embedded File Systems"]
    }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional achievements section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Research & Publications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                CubeOS: PX4 Autopilot-inspired Flight Software
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                Flight software for Nepal's next-generation CubeSat bus
              </p>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Published October 2024
              </span>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                Enhancing 5G Security via Error-Pattern Steganography
              </h4>
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
