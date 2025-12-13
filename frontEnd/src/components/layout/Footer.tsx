import { Link } from 'react-router-dom';
import { Dna, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                                <Dna className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-cyan-400" />
                            </div>
                            <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">GeneDetect AI</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            Empowering healthcare through advanced AI-driven genetic analysis.
                            Reliable, secure, and precise detection of hereditary conditions.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Platform</h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link to="/" className="hover:text-primary dark:hover:text-cyan-400 transition-colors">Home</Link></li>
                            <li><Link to="/description" className="hover:text-primary dark:hover:text-cyan-400 transition-colors">How it Works</Link></li>
                            <li><Link to="/diagnose" className="hover:text-primary dark:hover:text-cyan-400 transition-colors">Start Diagnosis</Link></li>
                            <li><Link to="/about" className="hover:text-primary dark:hover:text-cyan-400 transition-colors">Research Team</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Legal & Privacy</h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><a href="#" className="hover:text-primary dark:hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary dark:hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary dark:hover:text-cyan-400 transition-colors">Medical Disclaimer</a></li>
                            <li><a href="#" className="hover:text-primary dark:hover:text-cyan-400 transition-colors">Data Security</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Contact</h3>
                        <div className="space-y-4">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Cairo University, Faculty of Computers and AI.
                            </p>
                            <div className="flex items-center gap-4">
                                <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-cyan-400 transition-colors"><Github className="w-5 h-5" /></a>
                                <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-cyan-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
                                <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-cyan-400 transition-colors"><Mail className="w-5 h-5" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                    <p>© {currentYear} GeneDetect AI. For educational and research purposes only.</p>
                    <p className="mt-2 text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">Not for clinical use without verification</p>
                </div>
            </div>
        </footer>
    );
}
