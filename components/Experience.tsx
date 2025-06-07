
const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Led development of scalable web applications using React, Node.js, and modern cloud technologies.",
      technologies: ["React", "Node.js", "TypeScript", "AWS"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Built responsive web applications and collaborated with design teams to create exceptional user experiences.",
      technologies: ["React", "JavaScript", "CSS", "Figma"]
    },
    {
      title: "Junior Developer",
      company: "Startup Co.",
      period: "2019 - 2020",
      description: "Developed features for the company's main product and gained experience in agile development practices.",
      technologies: ["JavaScript", "HTML", "CSS", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-slate-500 dark:text-slate-400 font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
