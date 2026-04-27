import { useState } from 'react';
import { Sparkles, CheckCircle2, Key, BarChart3, Mic, Download, Info, Smile, AlertCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AISummaryPanel() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasSummary, setHasSummary] = useState(false);

  const generateSummary = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasSummary(true);
    }, 2000);
  };

  return (
    <div className="sticky top-28 flex flex-col gap-12">
      <div className="glass-card rounded-[40px] overflow-hidden">
        {/* Header */}
        <div className="bg-white/50 px-10 py-8 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Sparkles className="text-violet-500" size={26} />
            <h3 className="font-bold text-xl text-slate-800">AI Summary ✨</h3>
          </div>
          {hasSummary && <span className="text-[12px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-50 px-4 py-2 rounded-xl">Updated</span>}
        </div>

        <div className="p-12">
          {!hasSummary && !isGenerating ? (
            <div className="flex flex-col items-center gap-10 py-20 text-center">
              <div className="w-28 h-28 bg-violet-50 rounded-[40px] flex items-center justify-center text-violet-500 mb-2">
                <Sparkles size={56} />
              </div>
              <div className="space-y-5">
                <h4 className="font-bold text-3xl text-slate-800">Ready to summarize?</h4>
                <p className="text-xl text-slate-500 px-12 leading-relaxed">Our AI will process the article and extract the key takeaways in seconds.</p>
              </div>
              <button 
                onClick={generateSummary}
                className="mt-10 gradient-bg text-white px-14 py-6 rounded-3xl font-bold shadow-2xl shadow-violet-200 hover:scale-[1.05] transition-all active:scale-95"
              >
                Generate Summary
              </button>
            </div>
          ) : isGenerating ? (
            <div className="space-y-10 py-8">
              <div className="shimmer h-8 w-3/4 rounded-full" />
              <div className="shimmer h-40 w-full rounded-[40px]" />
              <div className="shimmer h-8 w-1/2 rounded-full" />
              <div className="shimmer h-20 w-full rounded-3xl" />
              <p className="text-center text-xl font-bold text-violet-400 animate-pulse mt-12">Processing article intelligence...</p>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="space-y-16"
            >
              {/* Bullet Points */}
              <div className="space-y-12">
                <SummaryPoint text="Next frontier shifts from LLMs to Agentic AI and Multimodal Reasoning." />
                <SummaryPoint text="Autonomous agents prioritize planning, tool use, and self-correction." />
                <SummaryPoint text="RAG and persistent state are overcoming context window limitations." />
              </div>

              {/* Takeaways Section */}
              <div className="bg-slate-50/50 rounded-[48px] p-12 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-5 mb-10">
                  <Key size={26} className="text-amber-500" />
                  <span className="text-[15px] font-black uppercase tracking-[0.4em] text-slate-400">Key Takeaways</span>
                </div>
                <div className="flex flex-wrap gap-6">
                  <Badge text="Agentic Workflows" color="bg-blue-50 text-blue-600" />
                  <Badge text="Multimodal" color="bg-purple-50 text-purple-600" />
                  <Badge text="Autonomous" color="bg-emerald-50 text-emerald-600" />
                </div>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-12">
                <MetricBox icon={<Smile className="text-emerald-500" size={28} />} label="Sentiment" value="Positive" />
                <MetricBox icon={<BarChart3 className="text-violet-500" size={28} />} label="Difficulty" value="Intermediate" />
              </div>

              {/* Actions */}
              <div className="pt-12 border-t border-slate-100 flex items-center justify-between gap-10">
                <button title="Voice Readout" className="flex-1 flex items-center justify-center p-8 bg-slate-50 hover:bg-slate-100 rounded-[32px] text-slate-600 transition-all hover:scale-110 active:scale-95 shadow-sm">
                  <Mic size={28} />
                </button>
                <button title="Download PDF" className="flex-1 flex items-center justify-center p-8 bg-slate-50 hover:bg-slate-100 rounded-[32px] text-slate-600 transition-all hover:scale-110 active:scale-95 shadow-sm">
                  <Download size={28} />
                </button>
                <button title="Article Info" className="flex-1 flex items-center justify-center p-8 bg-slate-50 hover:bg-slate-100 rounded-[32px] text-slate-600 transition-all hover:scale-110 active:scale-95 shadow-sm">
                  <Info size={28} />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Suggested Topics Card */}
      <AnimatePresence>
        {hasSummary && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-[48px] p-12"
          >
            <h4 className="font-bold text-slate-800 mb-10 flex items-center gap-5 text-xl">
              <HelpCircle size={28} className="text-sky-500" />
              Suggested Topics
            </h4>
            <div className="space-y-6">
              <SuggestedLink text="Deep Dive: RAG Architectures" />
              <SuggestedLink text="Ethics of Autonomous Agents" />
              <SuggestedLink text="Building with Gemini 2.0" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SummaryPoint({ text }) {
  return (
    <div className="flex gap-8 px-4">
      <CheckCircle2 size={28} className="text-violet-400 shrink-0 mt-1" />
      <p className="text-xl text-slate-600 leading-[1.8]">{text}</p>
    </div>
  );
}

function Badge({ text, color }) {
  return <span className={`px-6 py-3 rounded-2xl text-[13px] font-bold uppercase tracking-[0.1em] ${color}`}>{text}</span>;
}

function MetricBox({ icon, label, value }) {
  return (
    <div className="bg-white/40 p-8 rounded-[32px] border border-slate-100">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
      </div>
      <p className="text-2xl font-bold text-slate-700">{value}</p>
    </div>
  );
}

function SuggestedLink({ text }) {
  return (
    <a href="#" className="block text-lg text-sky-600 font-semibold hover:translate-x-2 transition-transform">
      → {text}
    </a>
  );
}
