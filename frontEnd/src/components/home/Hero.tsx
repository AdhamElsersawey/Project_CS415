import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { useRef } from 'react';

// Placeholder for DNA Animation using CSS/SVG since we don't have a Lottie file yet
const DNAAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl rounded-full" />
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow opacity-80">
            <defs>
                <linearGradient id="dna-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
            </defs>
            <path
                d="M100,20 C140,20 160,60 160,100 C160,140 140,180 100,180 C60,180 40,140 40,100 C40,60 60,20 100,20 Z"
                fill="none"
                stroke="url(#dna-gradient)"
                strokeWidth="4"
                className="opacity-50"
            />
            <circle cx="100" cy="100" r="60" stroke="#14b8a6" strokeWidth="2" fill="none" strokeDasharray="10 10" />
            <path
                d="M100,40 Q130,100 100,160 M100,40 Q70,100 100,160"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary dark:text-cyan-400"
            />
        </svg>
        <div className="absolute animate-pulse">
            <Activity className="w-12 h-12 sm:w-16 sm:h-16 text-primary dark:text-cyan-400" />
        </div>
    </div>
);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section ref={containerRef} className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent dark:from-blue-950/30 opacity-50" />
                <motion.div style={{ y: y1 }} className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
                <motion.div style={{ y: y2 }} className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-cyan-400 text-xs sm:text-sm font-medium"
                        >
                            ✨ AI-Powered Genetic Analysis
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-slate-900 dark:text-white"
                        >
                            Decode Your{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-cyan-400 dark:to-purple-400">
                                Genetic Blueprint
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-xl leading-relaxed"
                        >
                            Leverage cutting-edge AI to detect genetic disease markers with
                            unprecedented accuracy. Get personalized insights from your DNA data.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                        >
                            <Link
                                to="/diagnose"
                                className="group inline-flex items-center justify-center gap-2 bg-primary dark:bg-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 dark:hover:bg-cyan-700 transition-all shadow-xl hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-cyan-500/30 hover:-translate-y-1"
                            >
                                Start Analysis
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/description"
                                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:border-primary dark:hover:border-cyan-500 hover:text-primary dark:hover:text-cyan-400 transition-all"
                            >
                                Learn More
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 sm:mt-12 flex flex-wrap gap-6 sm:gap-8"
                        >
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-primary dark:text-cyan-400">98%</div>
                                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Accuracy Rate</div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-primary dark:text-cyan-400">50+</div>
                                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Disease Markers</div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-primary dark:text-cyan-400">&lt;5s</div>
                                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Analysis Time</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - DNA Animation with Floating Cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative h-[350px] sm:h-[450px] lg:h-[600px] hidden sm:block"
                    >
                        {/* DNA Animation Container */}
                        <div className="relative w-full h-full max-w-md mx-auto aspect-square bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-[2rem] shadow-2xl border border-white/50 dark:border-slate-700/50 backdrop-blur-sm p-6 sm:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <DNAAnimation />

                            {/* Floating Card 1 - Analysis Status - Hidden on smaller screens */}
                            <motion.div
                                className="absolute -right-8 sm:-right-12 top-16 sm:top-20 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:flex items-center gap-2 sm:gap-3 z-20"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="bg-green-100 dark:bg-green-500/20 p-2 rounded-lg">
                                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">Analysis Status</div>
                                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Processing...</div>
                                </div>
                            </motion.div>

                            {/* Floating Card 2 - Accuracy Badge - Hidden on smaller screens */}
                            <motion.div
                                className="absolute -left-12 sm:-left-16 bottom-24 sm:bottom-32 bg-white dark:bg-slate-800 px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block z-20"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">98% Accurate</span>
                                </div>
                            </motion.div>

                            {/* Floating Card 3 - Speed Indicator - Hidden on smaller screens */}
                            <motion.div
                                className="absolute -right-6 sm:-right-8 bottom-20 sm:bottom-24 bg-gradient-to-r from-blue-500 to-purple-600 p-2.5 sm:p-3 rounded-xl shadow-xl hidden md:block z-20"
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="text-white text-center">
                                    <div className="text-xl sm:text-2xl font-bold">&lt;5s</div>
                                    <div className="text-xs opacity-90">Fast Results</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
                    <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center"
                    >
                        <div className="w-1 h-3 bg-primary dark:bg-cyan-400 rounded-full mt-2" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
