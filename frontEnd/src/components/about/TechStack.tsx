export default function TechStack() {
  const stack = [
    { name: "React 18", category: "Frontend", color: "bg-blue-500" },
    { name: "TypeScript", category: "Language", color: "bg-blue-600" },
    { name: "Vite", category: "Build Tool", color: "bg-purple-500" },
    { name: "Tailwind CSS", category: "Styling", color: "bg-cyan-500" },
    { name: "Framer Motion", category: "Animation", color: "bg-pink-500" },
    { name: "TensorFlow", category: "AI Model", color: "bg-orange-500" },
    { name: "Python", category: "Backend", color: "bg-yellow-500" },
    { name: "FastAPI", category: "API", color: "bg-teal-500" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 dark:text-white mb-8 sm:mb-12">Built With Advanced Technology</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {stack.map((tech, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 hover:shadow-md transition-all duration-300">
              <div className={`w-3 h-3 rounded-full ${tech.color} flex-shrink-0`} />
              <div className="text-center sm:text-left">
                <div className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">{tech.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">{tech.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
