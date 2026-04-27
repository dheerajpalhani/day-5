import { motion } from 'framer-motion';
import { Zap, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-40 md:pt-48 md:pb-56 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        {/* Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-600">V2.4 Protocol Active</span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight gradient-text animate-float">
          The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender via-electric-blue to-soft-violet">Autonomous Agents</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          AI systems that can think, plan, research, reason, and execute complex workflows <span className="text-indigo-600 font-bold">autonomously</span>. Intelligence beyond assistance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-2xl bg-electric-blue text-white font-black text-sm shadow-xl shadow-electric-blue/30 hover:bg-electric-blue/90 transition-all flex items-center gap-3 glow-primary"
          >
            <Zap size={18} fill="white" />
            Launch Agent
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-2xl bg-white/30 backdrop-blur-lg border border-indigo-200 text-slate-900 font-black text-sm shadow-lg hover:bg-white/40 transition-all flex items-center gap-3"
          >
            <Play size={18} className="text-indigo-600" />
            Watch Demo
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
