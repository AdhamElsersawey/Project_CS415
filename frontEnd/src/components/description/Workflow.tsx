import { motion } from 'framer-motion';
import { Upload, FileCog, Cpu, Activity, FileText } from 'lucide-react';

const steps = [
    { icon: Upload, title: "Data Upload", desc: "Upload CSV/JSON genetic data" },
    { icon: FileCog, title: "Preprocessing", desc: "Normalization & validation" },
    { icon: Cpu, title: "AI Analysis", desc: "Deep learning inference" },
    { icon: Activity, title: "Prediction", desc: "Risk scoring & classification" },
    { icon: FileText, title: "Report", desc: "Start Medical Report generation" }
];

export default function Workflow() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 dark:text-white mb-12 sm:mb-16">Analysis Workflow</h2>

                <div className="relative">
                    {/* Connecting Line - Hidden on mobile */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white dark:bg-slate-800 border-4 border-blue-50 dark:border-slate-700 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:border-blue-500 dark:group-hover:border-cyan-500 transition-colors duration-300 shadow-sm">
                                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-sm sm:text-base">{step.title}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
