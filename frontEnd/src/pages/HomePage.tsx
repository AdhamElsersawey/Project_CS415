import { Link } from "react-router-dom"
import { ArrowRight, Microscope, Dna, Database, Activity, ShieldCheck } from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#071025] dark:via-[#071025] dark:to-slate-900 text-slate-900 dark:text-slate-200 overflow-hidden relative selection:bg-cyan-500/30 transition-colors duration-300">
      {/* Header */}
      <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071025]/70 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-md">
              <Dna className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">GenePredictor</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">AI-driven SNP risk analysis</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="text-sm text-slate-700 dark:text-slate-200 hover:underline">Home</Link>
              <Link to="/input" className="text-sm text-slate-600 dark:text-slate-300">Analyze</Link>
              <Link to="/dna-education" className="text-sm text-slate-600 dark:text-slate-300">DNA 3D</Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex items-center justify-center px-4 py-20 lg:py-28">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">Decode your genetic future with fast, local SNP analysis</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">Upload or paste rsIDs and get a model-backed risk summary for common diseases. Private, offline, and research-grade.</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
              <Link to="/input" className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold shadow-md transition-all">
                Start Analysis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/dna-education" className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold transition-all">
                Explore DNA 3D
                <Microscope className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-md">
            <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">Quick Actions</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link to="/input" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="p-2 rounded-md bg-cyan-50 dark:bg-cyan-900/20"><Database className="w-5 h-5 text-cyan-600" /></div>
                <div>
                  <div className="font-semibold">Analyze SNPs</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Paste rsIDs or upload file</div>
                </div>
              </Link>
              <Link to="/results" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="p-2 rounded-md bg-yellow-50 dark:bg-yellow-900/10"><Activity className="w-5 h-5 text-yellow-600" /></div>
                <div>
                  <div className="font-semibold">View Example Results</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">See sample analysis reports</div>
                </div>
              </Link>
              <Link to="/dna-education" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="p-2 rounded-md bg-purple-50 dark:bg-purple-900/10"><Microscope className="w-5 h-5 text-purple-600" /></div>
                <div>
                  <div className="font-semibold">3D DNA Viewer</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Interactive helix visualization</div>
                </div>
              </Link>
              <Link to="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="p-2 rounded-md bg-emerald-50 dark:bg-emerald-900/10"><ShieldCheck className="w-5 h-5 text-emerald-600" /></div>
                <div>
                  <div className="font-semibold">Privacy First</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">All analysis runs locally</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center shadow-sm">
            <div className="mx-auto w-12 h-12 rounded-lg bg-cyan-50 dark:bg-cyan-900/10 flex items-center justify-center mb-4"><Database className="w-6 h-6 text-cyan-600" /></div>
            <h4 className="font-semibold">Flexible Input</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Support rsID lists and common variant formats.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center shadow-sm">
            <div className="mx-auto w-12 h-12 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 flex items-center justify-center mb-4"><Activity className="w-6 h-6 text-yellow-600" /></div>
            <h4 className="font-semibold">Accurate Models</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Pretrained models provide probabilistic risk estimates.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center shadow-sm">
            <div className="mx-auto w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-900/10 flex items-center justify-center mb-4"><Dna className="w-6 h-6 text-purple-600" /></div>
            <h4 className="font-semibold">Interactive Visuals</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">3D helix viewer and detailed mutation reports.</p>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-20" />
    </main>
  )
}
