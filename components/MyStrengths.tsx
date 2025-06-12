
"use client";

const MyStrengths = () => {
  const specializations = [
    "Firmware Development",
    "Bootloader Development", 
    "OS & Middlewares",
    "Inter-Process Communication",
    "OTA Updates",
    "Embedded File Systems"
  ];

  return (
    <section id="strengths" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My Strengths
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Core areas where I excel in embedded systems and software development.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800/50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStrengths;
