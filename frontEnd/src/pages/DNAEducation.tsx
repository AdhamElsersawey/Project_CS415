import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Dna } from 'lucide-react';

const mutations = [
    {
        type: "Point Mutation",
        desc: "A change in a single nucleotide base pair in the DNA sequence.",
        visual: (
            <div className="flex items-center justify-center gap-1 font-mono text-lg">
                <span className="text-slate-400">A</span>
                <span className="text-slate-400">T</span>
                <span className="text-slate-400">G</span>
                <div className="relative">
                    <span className="text-red-500 font-bold">C</span>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                        className="absolute -top-6 left-0 text-xs bg-red-100 text-red-600 px-1 rounded transform -translate-x-1/4"
                    >
                        Mutated
                    </motion.div>
                </div>
                <span className="text-slate-400">C</span>
                <span className="text-slate-400">A</span>
            </div>
        )
    },
    {
        type: "Deletion",
        desc: "One or more nucleotides are removed from the DNA sequence.",
        visual: (
            <div className="flex items-center justify-center gap-1 font-mono text-lg">
                <span className="text-slate-400">A</span>
                <span className="text-slate-400">T</span>
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <motion.span
                        animate={{ scale: [1, 0], opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-slate-400 absolute"
                    >
                        G
                    </motion.span>
                    <span className="text-red-500 text-xs absolute top-8">Deleted</span>
                </div>
                <span className="text-slate-400">C</span>
                <span className="text-slate-400">A</span>
            </div>
        )
    },
    {
        type: "Insertion",
        desc: "One or more nucleotides are added to the DNA sequence.",
        visual: (
            <div className="flex items-center justify-center gap-1 font-mono text-lg">
                <span className="text-slate-400">A</span>
                <span className="text-slate-400">T</span>
                <div className="relative">
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="px-1 bg-green-100 rounded"
                    >
                        <span className="text-green-600 font-bold">T</span>
                    </motion.div>
                </div>
                <span className="text-slate-400">G</span>
                <span className="text-slate-400">C</span>
            </div>
        )
    }
];

export default function DNAEducation() {
    return (
        <Layout>
            <div className="pt-12 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20">
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Understanding Genetic Mutations</h1>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                            Genetic mutations are changes in your DNA sequence that can affect how your biology works. While some are harmless, others can lead to genetic disorders.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        {mutations.map((mutation, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="h-32 bg-slate-50 dark:bg-slate-800 rounded-xl mb-6 flex items-center justify-center border border-slate-100 dark:border-slate-600 overflow-hidden">
                                    {mutation.visual}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{mutation.type}</h3>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{mutation.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Impact on Health</h2>
                                <p className="text-blue-100 max-w-xl leading-relaxed text-sm sm:text-base">
                                    Changes in DNA can alter proteins that play critical roles in the body. Our AI platform specifically analyzes these variations to predict their potential impact on your health.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                                    <Dna className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
