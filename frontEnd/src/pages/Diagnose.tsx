import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import AnalysisView from '../components/diagnose/AnalysisView';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { fetchExamples, predict, PredictionResponse } from '../lib/api';
import { cn } from '../lib/utils';

export default function Diagnose() {
    const [status, setStatus] = useState<'idle' | 'analyzing' | 'complete' | 'error'>('idle');
    const [inputMode, setInputMode] = useState<'upload' | 'manual'>('manual');
    const [manualInput, setManualInput] = useState('');
    const [examples, setExamples] = useState<Record<string, string[]>>({});
    const [results, setResults] = useState<PredictionResponse | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        fetchExamples()
            .then(setExamples)
            .catch(console.error);
    }, []);

    const handleAnalyze = async (snps: string[]) => {
        setStatus('analyzing');
        setErrorMsg(null);
        try {
            // Minimum duration for animation
            const minDuration = new Promise(resolve => setTimeout(resolve, 3000));
            const predictionPromise = predict(snps);

            const [prediction] = await Promise.all([predictionPromise, minDuration]);

            setResults(prediction);
            setStatus('complete');
        } catch (err) {
            console.error(err);
            setErrorMsg("Failed to analyze data. Please check the backend connection.");
            setStatus('error');
        }
    };

    const handleManualSubmit = () => {
        if (!manualInput.trim()) return;
        const snps = manualInput.split(/[\s,]+/).filter(Boolean);
        handleAnalyze(snps);
    };

    const loadExample = (groupName: string) => {
        if (!examples[groupName]) return;

        const snpsToAdd = examples[groupName].join(', ');

        setManualInput(prev => {
            if (prev.includes(snpsToAdd)) {
                // Remove if already present (toggle off)
                return prev.replace(snpsToAdd, '').replace(/,\s*,/g, ',').replace(/^,\s*/, '').replace(/,\s*$/, '');
            } else {
                // Append (toggle on)
                return prev ? `${prev}, ${snpsToAdd}` : snpsToAdd;
            }
        });
    };

    return (
        <Layout>
            <div className="min-h-[80vh] bg-slate-50 dark:bg-slate-950 py-8 sm:py-12 transition-colors duration-300">
                <div className="container mx-auto px-4 sm:px-6">
                    <AnimatePresence mode="wait">
                        {status === 'idle' || status === 'error' ? (
                            <motion.div
                                key="input"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="max-w-4xl mx-auto"
                            >
                                <div className="text-center mb-8 sm:mb-12">
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Genetic Variant Analysis</h1>
                                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
                                        Enter a list of SNPs (e.g., rs6947395-T) to detect potential genetic risks using our AI model.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 p-6 sm:p-8 transition-colors duration-300">
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                                        <button
                                            onClick={() => setInputMode('manual')}
                                            className={cn(
                                                "flex-1 py-3 rounded-lg font-medium transition-colors",
                                                inputMode === 'manual' ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                            )}
                                        >
                                            Manual Input
                                        </button>
                                        <button
                                            disabled
                                            className="flex-1 py-3 rounded-lg font-medium bg-slate-50 text-slate-400 cursor-not-allowed"
                                        >
                                            File Upload (Coming Soon)
                                        </button>
                                    </div>

                                    {inputMode === 'manual' && (
                                        <div className="space-y-6">
                                            <div className="mb-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                                                <span className="text-sm font-semibold text-slate-700 block mb-3">Load Example Data (Click to toggle):</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {Object.keys(examples).length === 0 ? (
                                                        <div className="text-sm text-slate-400 italic">Loading examples from model...</div>
                                                    ) : (
                                                        Object.keys(examples).map(groupName => (
                                                            <button
                                                                key={groupName}
                                                                onClick={() => loadExample(groupName)}
                                                                className={cn(
                                                                    "text-xs px-3 py-1.5 rounded-full transition-all border border-transparent",
                                                                    manualInput.includes(examples[groupName].join(', '))
                                                                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                                                        : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                                                                )}
                                                            >
                                                                {groupName}
                                                            </button>
                                                        ))
                                                    )}
                                                </div>
                                            </div>

                                            <textarea
                                                value={manualInput}
                                                onChange={(e) => setManualInput(e.target.value)}
                                                placeholder="Enter SNPs separated by commas, spaces, or newlines..."
                                                className="w-full h-40 p-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none font-mono text-sm leading-relaxed"
                                            />

                                            {errorMsg && (
                                                <div className="bg-red-50 border border-red-100 text-red-700 p-4 rounded-xl flex items-start gap-3 text-sm animate-shake">
                                                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="font-bold">Analysis Error</p>
                                                        <p>{errorMsg}</p>
                                                    </div>
                                                </div>
                                            )}

                                            <button
                                                onClick={handleManualSubmit}
                                                disabled={!manualInput.trim()}
                                                className="w-full py-3 sm:py-4 bg-primary dark:bg-cyan-600 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-blue-700 dark:hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-primary/30 dark:hover:shadow-cyan-500/30 flex items-center justify-center gap-2"
                                            >
                                                Analyze Sequence
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ) : status === 'analyzing' ? (
                            <motion.div
                                key="analyzing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex justify-center pt-20"
                            >
                                <AnalysisView />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="max-w-4xl mx-auto"
                            >
                                <div className="text-center mb-6 sm:mb-8">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Analysis Complete</h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">AI Model Results</p>
                                </div>

                                {!results ? (
                                    <div className="p-8 bg-red-50 text-red-600 rounded-xl text-center">
                                        <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
                                        <p className="font-bold">Error: No results data received.</p>
                                        <p className="text-sm">Please try again or contact support.</p>
                                    </div>
                                ) : (
                                    <div className="grid gap-6">
                                        {results?.summary.diseases_detected === 0 ? (
                                            <div className="bg-green-50 border border-green-100 p-8 rounded-2xl text-center">
                                                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                                <h3 className="text-xl font-bold text-green-700">No High Risk Detected</h3>
                                                <p className="text-green-600 mt-2">None of the screened markers showed significant risk association.</p>
                                            </div>
                                        ) : (
                                            Object.entries(results?.predictions || {})
                                                .filter(([_, data]) => data.has_disease)
                                                .map(([disease, data]) => (
                                                    <motion.div
                                                        key={disease}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden"
                                                    >
                                                        <div className="bg-red-50 p-6 flex items-center justify-between">
                                                            <h3 className="text-xl font-bold text-slate-900">{disease}</h3>
                                                            <div className="bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-bold border border-red-200">
                                                                {data.percentage} Risk
                                                            </div>
                                                        </div>
                                                        <div className="p-6">
                                                            <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                                                                <AlertTriangle className="w-4 h-4 text-amber-500" />
                                                                Risk Level: <span className="font-bold text-slate-900">{data.risk_level}</span>
                                                            </div>
                                                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                                                <div
                                                                    className="bg-red-500 h-full rounded-full transition-all duration-1000"
                                                                    style={{ width: data.percentage }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))
                                        )}
                                    </div>
                                )}

                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 mx-auto block px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                                >
                                    Analyze Another Sample
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </Layout>
    );
}
