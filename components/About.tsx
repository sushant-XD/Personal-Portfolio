
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey in web development started with curiosity and has evolved into a deep passion 
              for crafting digital experiences that make a difference. I'm always eager to learn new 
              technologies and take on challenging projects.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg">
                Problem Solver
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg">
                Team Player
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg">
                Continuous Learner
              </span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Quick Facts
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Location</span>
                <span className="font-medium text-slate-900 dark:text-white">Your City, Country</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Experience</span>
                <span className="font-medium text-slate-900 dark:text-white">X+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Focus</span>
                <span className="font-medium text-slate-900 dark:text-white">Full-Stack Development</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Availability</span>
                <span className="font-medium text-green-600">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
