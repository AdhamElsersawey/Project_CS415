"use client"

import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { ArrowLeft, ExternalLink, Dna, Info, Share2, Printer } from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"

interface MutationDetail {
  id: string; diseaseName: string; mutations: { name: string; rsId: string; gene: string; chromosome: string; pathogenicity: string; }[];
  clinicalSignificance: string; references: { title: string; url: string; }[]; externalLinks: { name: string; url: string; }[]
}

export default function MutationDetailPage() {
  const { id } = useParams(); const location = useLocation(); const [data, setData] = useState<MutationDetail | null>(null);

  useEffect(() => {
    if (location.state?.diseaseData) {
      const passedData = location.state.diseaseData;
      const directMutations = passedData.mutations.map((mutString: string) => ({
        name: mutString, rsId: mutString, gene: "-", chromosome: "-", pathogenicity: passedData.pathogenicity
      }));
      
      setData({
        id: passedData.id, diseaseName: passedData.name, mutations: directMutations,
        clinicalSignificance: passedData.description || "No description provided.",
        references: passedData.references?.map((ref: string) => ({ title: ref, url: `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(ref)}` })) || [],
        externalLinks: [{ name: "ClinVar", url: "https://www.ncbi.nlm.nih.gov/clinvar/" }]
      });
    }
  }, [id, location.state]);

  if (!data) return <div className="min-h-screen bg-white dark:bg-[#0f172a] flex items-center justify-center text-cyan-600 dark:text-cyan-400 transition-colors duration-300">Loading Report...</div>;

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f172a] text-slate-900 dark:text-slate-200 transition-colors duration-300">
      {/* Top Navigation */}
      <div className="bg-white dark:bg-[#0f172a]/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/results" className="flex items-center gap-2 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Analysis
            </Link>
            <div className="flex gap-3 items-center">
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-400 transition-colors"><Printer className="w-5 h-5"/></button>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-400 transition-colors"><Share2 className="w-5 h-5"/></button>
                <ThemeToggle />
            </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header Block */}
        <div className="flex items-start gap-6 mb-12">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl ${
                data.mutations[0]?.pathogenicity === 'High' ? 'bg-red-500/20 dark:bg-red-500/20 text-red-600 dark:text-red-400 shadow-red-900/20' : 'bg-yellow-500/20 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
            }`}>
                <Dna className="w-8 h-8" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{data.diseaseName}</h1>
                <div className="flex gap-3">
                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-700 dark:text-slate-400 font-mono transition-colors">
                        ID: {data.id}
                    </span>
                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-700 dark:text-slate-400 transition-colors">
                        Autosomal Pattern
                    </span>
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                {/* Clinical Context */}
                <section className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-cyan-600 dark:text-cyan-500" /> Clinical Significance
                    </h3>
                    <p className="text-slate-700 dark:text-slate-400 leading-relaxed text-lg">
                        {data.clinicalSignificance}
                    </p>
                </section>

                {/* Variants List */}
                <section>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Identified Variants</h3>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-colors duration-300">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Variant ID</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                    <th className="px-6 py-4 font-medium">Database</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                {data.mutations.map((mut, i) => (
                                    <tr key={i} className="hover:bg-slate-100 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4 font-mono text-cyan-700 dark:text-cyan-300 font-medium">{mut.name}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                                                mut.pathogenicity === 'High' ? 'bg-red-950 text-red-400 border border-red-900' : 'bg-yellow-950 text-yellow-400 border border-yellow-900'
                                            }`}>
                                                {mut.pathogenicity} Impact
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href={`https://www.ncbi.nlm.nih.gov/snp/${mut.rsId}`} target="_blank" className="text-blue-400 hover:underline flex items-center gap-1">
                                                NCBI <ExternalLink className="w-3 h-3"/>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h3 className="font-semibold text-white mb-4">References</h3>
                    <ul className="space-y-3">
                        {data.references.length > 0 ? data.references.map((ref, i) => (
                            <li key={i} className="text-sm">
                                <a href={ref.url} target="_blank" className="text-slate-400 hover:text-cyan-400 transition-colors flex gap-2">
                                    <span className="text-slate-600 font-mono">{i+1}.</span>
                                    {ref.title}
                                </a>
                            </li>
                        )) : <li className="text-slate-500 text-sm">No direct references provided.</li>}
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-cyan-100 mb-2">Need Consultation?</h3>
                    <p className="text-sm text-slate-400 mb-4">
                        This AI-generated report is for research use only. Consult a genetic counselor for clinical advice.
                    </p>
                    <button className="w-full py-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/50 rounded-lg text-sm transition-colors">
                        Find a Counselor
                    </button>
                </div>
            </aside>
        </div>
      </div>
    </main>
  )
}