"use client"

import { Link } from "react-router-dom"
import { ArrowRight, Dna, Database, Activity, ShieldCheck, Microscope } from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0f172a] dark:via-[#0f172a] dark:to-slate-900 text-slate-900 dark:text-slate-200 overflow-hidden relative selection:bg-cyan-500/30 transition-colors duration-300">
      
      {/* Background Elements (Decorative DNA blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800/60 sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Dna className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 dark:from-white to-blue-600 dark:to-slate-400">
              GenePredictor
            </span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8">
              <Link to="/" className="text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">Home</Link>
              <Link to="/input" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Analyze</Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 lg:py-32">
        <div className="max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-sm text-cyan-600 dark:text-cyan-400 mb-4">
            <Microscope className="w-4 h-4" />
            <span>AI-Powered Genomic Analysis</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
            Decode Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500">Genetic Future</span>
          </h1>
          
          <p className="text-lg text-slate-700 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Leverage advanced machine learning algorithms to predict disease risks from specific genetic markers (SNPs). 
            Fast, secure, and research-focused.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              to="/input"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]"
            >
              Start Genome Analysis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Database className="w-6 h-6 text-purple-400" />, title: "Input Mutations", desc: "Support for rsID (rs1333049) and HGVS formats." },
              { icon: <Activity className="w-6 h-6 text-cyan-400" />, title: "Risk Prediction", desc: "AI models trained on thousands of clinical datasets." },
              { icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />, title: "Secure & Private", desc: "Your genetic data is processed locally in session." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800/30 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-cyan-400 dark:hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-700 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}