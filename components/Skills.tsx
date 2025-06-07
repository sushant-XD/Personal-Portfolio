
"use client";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: "Expert", icon: "🟨" },
        { name: "TypeScript", level: "Expert", icon: "🔷" },
        { name: "Python", level: "Intermediate", icon: "🐍" },
        { name: "Java", level: "Intermediate", icon: "☕" },
        { name: "Go", level: "Beginner", icon: "🐹" }
      ]
    },
    {
      title: "Frontend Frameworks",
      skills: [
        { name: "React", level: "Expert", icon: "⚛️" },
        { name: "Next.js", level: "Expert", icon: "▲" },
        { name: "Vue.js", level: "Intermediate", icon: "💚" },
        { name: "Angular", level: "Beginner", icon: "🅰️" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: "Expert", icon: "💚" },
        { name: "Express.js", level: "Expert", icon: "🚂" },
        { name: "PostgreSQL", level: "Intermediate", icon: "🐘" },
        { name: "MongoDB", level: "Intermediate", icon: "🍃" },
        { name: "Redis", level: "Beginner", icon: "🔴" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: "Expert", icon: "📂" },
        { name: "Docker", level: "Intermediate", icon: "🐋" },
        { name: "AWS", level: "Intermediate", icon: "☁️" },
        { name: "Figma", level: "Intermediate", icon: "🎨" },
        { name: "Linux", level: "Intermediate", icon: "🐧" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Beginner":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technologies I work with and my proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium text-slate-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow border border-slate-100 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 text-center">Proficiency Levels:</p>
            <div className="flex space-x-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor("Expert")}`}>
                Expert
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor("Intermediate")}`}>
                Intermediate
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor("Beginner")}`}>
                Beginner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
