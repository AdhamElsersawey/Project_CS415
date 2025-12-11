"use client"

import { useState, Suspense } from "react"
import { Play, Pause, RotateCcw, Volume2, VolumeX, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import DNA3DScene from "../components/DNA3DScene"

export default function DNAEducation() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [activePanel, setActivePanel] = useState<"genes" | "basepairs" | "mutations" | "replication">("genes")

  const panels = {
    genes: {
      title: "What Are Genes?",
      content:
        "Genes are segments of DNA that encode instructions for producing proteins. Each gene contains a specific sequence of base pairs (typically 1,000 to 100,000 bases) that determines the amino acid sequence of a protein.",
      details: [
        "Basic unit of heredity",
        "Contain protein-coding instructions",
        "Located on chromosomes",
        "Can be passed to offspring",
      ],
    },
    basepairs: {
      title: "DNA Base Pairing",
      content:
        "DNA consists of four nucleotide bases: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C). These bases pair specifically: A↔T and G↔C. This complementary pairing ensures accurate replication and gene expression.",
      details: [
        "A pairs with T (2 hydrogen bonds)",
        "G pairs with C (3 hydrogen bonds)",
        "Maintains DNA structure integrity",
        "Critical for replication accuracy",
      ],
    },
    mutations: {
      title: "Types of Mutations",
      content:
        "Genetic mutations are changes in DNA sequence. Three main types: Substitution (one base replaced), Insertion (bases added), and Deletion (bases removed). Some mutations are benign, while others can cause genetic disorders.",
      details: [
        "Point mutations affect single bases",
        "Can alter protein function",
        "Some provide evolutionary advantage",
        "Others cause genetic diseases",
      ],
    },
    replication: {
      title: "DNA Replication",
      content:
        "DNA replication is the process by which a double-stranded DNA molecule is copied. The DNA helix unwinds, enzymes read each strand as a template, and new complementary strands are synthesized using free nucleotides.",
      details: [
        "DNA polymerase builds new strands",
        "Occurs during cell division",
        "Usually error-free process",
        "Results in two identical DNA copies",
      ],
    },
  }

  const currentPanel = panels[activePanel]

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* 3D Scene */}
      <Suspense
        fallback={
          <div className="w-full h-screen bg-slate-900 flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-cyan-500"></div>
          </div>
        }
      >
        <DNA3DScene isPlaying={isPlaying} isMuted={isMuted} />
      </Suspense>

      {/* Control Panel - Top Left */}
      <div className="absolute top-6 left-6 z-40">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/10 max-w-sm">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            DNA Explorer
          </h2>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg py-2 flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button
              onClick={() => setIsPlaying(true)}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white rounded-lg py-2 flex items-center justify-center gap-2 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="bg-slate-800 hover:bg-slate-700 text-white rounded-lg px-4 py-2 transition-all"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
          <Link
            to="/"
            className="w-full flex items-center justify-center gap-2 bg-slate-700/60 hover:bg-slate-700 text-slate-200 rounded-lg py-2 transition-all text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Info Panels - Bottom Left */}
      <div className="absolute bottom-6 left-6 z-40 max-w-md">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl shadow-purple-500/10">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
            {currentPanel.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">{currentPanel.content}</p>
          <div className="space-y-2">
            {currentPanel.details.map((detail, i) => (
              <div key={i} className="flex gap-2 text-xs text-slate-400">
                <span className="text-cyan-400 font-bold">•</span>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Panel Selector - Bottom Right */}
      <div className="absolute bottom-6 right-6 z-40">
        <div className="flex flex-col gap-3">
          {(["genes", "basepairs", "mutations", "replication"] as const).map((panel) => (
            <button
              key={panel}
              onClick={() => setActivePanel(panel)}
              className={`px-4 py-3 rounded-xl font-semibold transition-all text-sm ${
                activePanel === panel
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-slate-800/60 text-slate-300 hover:bg-slate-700 border border-slate-700"
              }`}
            >
              {panel === "genes" && "What Are Genes?"}
              {panel === "basepairs" && "Base Pairs A-T, G-C"}
              {panel === "mutations" && "Types of Mutations"}
              {panel === "replication" && "DNA Replication"}
            </button>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-6 right-6 z-40">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-xl px-6 py-3 text-center">
          <p className="text-cyan-400 text-sm font-semibold">GENETIC EDUCATION CENTER</p>
          <p className="text-slate-400 text-xs mt-1">Interactive 3D DNA Visualization</p>
        </div>
      </div>
    </div>
  )
}
