import { motion } from 'framer-motion';
import { Zap, Activity, Shield } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: Activity,
            title: 'High Accuracy',
            description: '98%+ accuracy in genetic disease marker detection using advanced neural networks.',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Zap,
            title: 'Fast Analysis',
            description: 'Process complex genetic data in seconds with our optimized AI algorithms.',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: Shield,
            title: 'Clear Reports',
            description: 'Get detailed, easy-to-understand reports with actionable health insights.',
            color: 'from-green-500 to-emerald-500',
        },
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Our Platform?</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Advanced AI technology meets precision medicine for comprehensive genetic analysis.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="group relative bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-2xl hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-cyan-500/20 transition-all duration-300 border border-slate-100 dark:border-slate-700"
                        >
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
