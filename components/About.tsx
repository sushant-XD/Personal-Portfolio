
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
              I'm a Computer Engineering student at Mississippi State University with a perfect 4.0 GPA, 
              passionate about Controls Systems Engineering, Automation, Hardware/Software Development, 
              and Embedded Systems/Firmware development.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey spans from developing Nepal's CubeSats to researching 5G security vulnerabilities 
              and creating autonomous safety systems for farming equipment. I thrive on interdisciplinary 
              research that bridges the gap between hardware and software.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg">
                Research Focused
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg">
                Embedded Systems
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg">
                Innovation Leader
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
                <span className="font-medium text-slate-900 dark:text-white">Mississippi State, MS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Education</span>
                <span className="font-medium text-slate-900 dark:text-white">Computer Engineering</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">GPA</span>
                <span className="font-medium text-slate-900 dark:text-white">4.0/4.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Focus</span>
                <span className="font-medium text-slate-900 dark:text-white">Embedded Systems</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Status</span>
                <span className="font-medium text-green-600">Available for Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
