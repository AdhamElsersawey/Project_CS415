"use client"

import { useState, Suspense, lazy } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react"

const DNA3DScene = lazy(() => import("../components/DNA3DScene"))

export default function DNAEducationPage() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [activePanel, setActivePanel] = useState<"genes" | "basepairs" | "mutations" | "replication">("genes")

  const handleReset = () => {
    window.location.reload()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden relative selection:bg-cyan-500/30">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800/60 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            3D DNA Explorer
          </h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {/* 3D Scene - Takes up 2 columns on desktop */}
        <div className="lg:col-span-2">
          <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-cyan-500/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            {/* Controls Bar */}
            <div className="absolute top-4 left-4 right-4 z-20 flex gap-2 flex-wrap">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-3 py-2 bg-cyan-600/80 hover:bg-cyan-500 rounded-lg font-medium text-sm transition-all shadow-lg shadow-cyan-500/30"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-3 py-2 bg-purple-600/80 hover:bg-purple-500 rounded-lg font-medium text-sm transition-all shadow-lg shadow-purple-500/30"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600/80 hover:bg-blue-500 rounded-lg font-medium text-sm transition-all shadow-lg shadow-blue-500/30"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* 3D Canvas */}
            <div className="w-full aspect-video">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin mx-auto"></div>
                      <p className="text-slate-400">Loading 3D Scene...</p>
                    </div>
                  </div>
                }
              >
                <DNA3DScene isPlaying={isPlaying} isMuted={isMuted} />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Info Panels Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {/* Panel Selector */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: "genes", label: "Genes" },
              { id: "basepairs", label: "Base Pairs" },
              { id: "mutations", label: "Mutations" },
              { id: "replication", label: "Replication" },
            ].map((panel) => (
              <button
                key={panel.id}
                onClick={() => setActivePanel(panel.id as any)}
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-all ${
                  activePanel === panel.id
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                    : "bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-cyan-500/50"
                }`}
              >
                {panel.label}
              </button>
            ))}
          </div>

          {/* Info Content */}
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 border border-cyan-500/20 rounded-xl p-5 backdrop-blur-sm space-y-4 h-fit sticky top-24">
            {activePanel === "genes" && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-cyan-400">What are Genes?</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Genes are segments of DNA that contain instructions for making proteins. Each gene has a specific
                  function and is made up of hundreds or thousands of nucleotides.
                </p>
                <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                  <li>Hereditary units passed from parents to offspring</li>
                  <li>Contain ~20,000-25,000 genes in humans</li>
                  <li>Located on chromosomes in the cell nucleus</li>
                </ul>
              </div>
            )}

            {activePanel === "basepairs" && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-purple-400">Base Pairing</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    <span className="text-sm text-slate-300">A ↔ T (2 hydrogen bonds)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                    <span className="text-sm text-slate-300">C ↔ G (3 hydrogen bonds)</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400">
                  Complementary base pairing ensures accurate DNA replication and maintains the double helix structure.
                </p>
              </div>
            )}

            {activePanel === "mutations" && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-rose-400">Types of Mutations</h3>
                <div className="space-y-2 text-xs text-slate-300">
                  <div>
                    <p className="font-semibold text-rose-300">Substitution</p>
                    <p className="text-slate-400">One nucleotide replaced with another (A→G)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-300">Insertion</p>
                    <p className="text-slate-400">Extra nucleotides added to sequence</p>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-300">Deletion</p>
                    <p className="text-slate-400">Nucleotides removed from sequence</p>
                  </div>
                </div>
              </div>
            )}

            {activePanel === "replication" && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-green-400">DNA Replication</h3>
                <ol className="text-xs text-slate-300 space-y-2 list-decimal list-inside">
                  <li>DNA helix unwinds</li>
                  <li>Strands separate at replication fork</li>
                  <li>DNA polymerase adds complementary bases</li>
                  <li>Two identical DNA molecules form</li>
                </ol>
                <p className="text-xs text-slate-400 italic">Essential for cell division and growth</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
