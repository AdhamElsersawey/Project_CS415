import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 dark:text-slate-200 font-sans transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
