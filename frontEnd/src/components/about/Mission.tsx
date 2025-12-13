import { motion } from 'framer-motion';
import { Target, HeartPulse, Globe2 } from 'lucide-react';

export default function Mission() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        Our Mission
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                        Democratizing Access to <br className="hidden sm:block" />
                        <span className="text-primary dark:text-cyan-400">Precision Medicine</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                        We are dedicated to bridging the gap between complex genomic data and actionable clinical insights. By harnessing the power of artificial intelligence, we aim to make early genetic disease detection accessible, accurate, and efficient for everyone.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Precision</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Reducing false positives through advanced deep learning architectures.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                <HeartPulse className="w-6 h-6 text-red-600 dark:text-red-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Patient-Centric</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Designed to support earlier interventions and better health outcomes.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                <Globe2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Universal Access</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Scalable technology adaptable to diverse genetic populations.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Abstract representation of mission */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 border border-white/10 rounded-full animate-spin-slow-reverse opacity-30" />
                        <div className="w-1/2 h-1/2 border border-white/20 rounded-full animate-spin-slow opacity-50 absolute" />
                        <div className="relative z-10 text-center">
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400 mb-2">
                                AI + DNA
                            </div>
                            <div className="text-white/60 text-sm tracking-widest uppercase">The Future of Medicine</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
