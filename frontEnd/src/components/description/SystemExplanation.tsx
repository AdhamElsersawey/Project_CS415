import { motion } from 'framer-motion';
import { Microscope, Dna, BrainCircuit } from 'lucide-react';

export default function SystemExplanation() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Understanding Genetic Disease Detection</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                        Our platform utilizes advanced artificial intelligence to analyze genetic sequences, identifying mutations that may lead to inherited disorders. By combining genomic data with machine learning, we provide early and accurate risk assessments.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300"
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mb-5 sm:mb-6">
                            <Dna className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">Genetic Data Analysis</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            We process raw sequencing data to identify Single Nucleotide Polymorphisms (SNPs) and structural variants associated with pathogenicity.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300"
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-500/20 rounded-xl flex items-center justify-center mb-5 sm:mb-6">
                            <BrainCircuit className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">AI Model Inference</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Our deep learning models, trained on ClinVar and gnomAD datasets, predict the clinical significance of detected variants with high confidence.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300"
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 dark:bg-teal-500/20 rounded-xl flex items-center justify-center mb-5 sm:mb-6">
                            <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-400" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">Clinical Insights</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Results are translated into actionable medical reports, classifying variants as Benign, Likely Pathogenic, or Pathogenic.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
