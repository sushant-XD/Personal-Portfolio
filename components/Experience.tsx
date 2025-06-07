
"use client";

const Experience = () => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"]
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      description: "Developed and maintained multiple client projects, focusing on modern web technologies and responsive design. Collaborated with cross-functional teams to deliver high-quality solutions.",
      technologies: ["React", "Express.js", "PostgreSQL", "Docker"]
    },
    {
      year: "2020 - 2021",
      title: "Frontend Developer",
      company: "Creative Web Studio",
      description: "Created engaging user interfaces and improved user experience across various web applications. Worked closely with designers to implement pixel-perfect designs.",
      technologies: ["Vue.js", "Sass", "JavaScript", "Figma"]
    },
    {
      year: "2019 - 2020",
      title: "Junior Developer",
      company: "StartUp Labs",
      description: "Started my professional journey building responsive websites and learning modern development practices. Contributed to various projects and gained valuable experience.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my skills
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

          {experiences.map((experience, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {experience.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {experience.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {experience.company}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for desktop layout */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
