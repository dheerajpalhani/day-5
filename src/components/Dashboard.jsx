import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Search, Send, Activity, ShieldCheck, 
  Cpu, Database, Clock, Users, Globe, Code, 
  PieChart, PenTool, Terminal, Play, CheckCircle2,
  BrainCircuit, Layers, Share2, Download, Copy,
  Mic, Command, Sun, Moon
} from 'lucide-react';
import { 
  AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip 
} from 'recharts';

// --- Mock Data ---
const performanceData = [
  { time: '00:00', value: 30 },
  { time: '04:00', value: 45 },
  { time: '08:00', value: 38 },
  { time: '12:00', value: 65 },
  { time: '16:00', value: 58 },
  { time: '20:00', value: 82 },
  { time: '23:59', value: 75 },
];

const agents = [
  { id: 1, name: 'Web Research Agent', icon: Globe, status: 'online', tasks: 12, progress: 85, color: 'text-blue-500' },
  { id: 2, name: 'Code Agent', icon: Code, status: 'busy', tasks: 4, progress: 42, color: 'text-indigo-500' },
  { id: 3, name: 'Data Analysis Agent', icon: PieChart, status: 'online', tasks: 8, progress: 91, color: 'text-violet-500' },
  { id: 4, name: 'Strategy Agent', icon: Zap, status: 'online', tasks: 2, progress: 15, color: 'text-amber-500' },
  { id: 5, name: 'Creative Agent', icon: PenTool, status: 'online', tasks: 5, progress: 67, color: 'text-rose-500' },
];

const executionSteps = [
  { id: 'planning', label: 'Planning', status: 'completed' },
  { id: 'searching', label: 'Searching', status: 'completed' },
  { id: 'reasoning', label: 'Reasoning', status: 'active' },
  { id: 'verification', label: 'Verification', status: 'pending' },
  { id: 'output', label: 'Final Output', status: 'pending' },
];

const liveFeed = [
  'Searching sources: "Latest trends in transformer architecture"...',
  'Comparing results from 14 verified whitepapers...',
  'Generating synthesis of multi-agent orchestration...',
  'Finalizing recommendation for cloud-native deployment...',
];

export default function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [feedIndex, setFeedIndex] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % liveFeed.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-10">
      {/* 2-Column Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT PANEL: Agent Workspace (7/12) */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-200">
                  <Terminal size={20} />
                </div>
                <h2 className="text-xl font-bold">Mission Control</h2>
              </div>
              <div className="flex gap-2">
                <button className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-all">
                  <Copy size={16} className="text-gray-500" />
                </button>
                <button className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-all">
                  <Download size={16} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Prompt Input */}
            <div className="relative mb-10">
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Initialize agent objective (e.g., 'Research latest AI development trends')..."
                className="w-full h-32 p-6 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all resize-none font-medium placeholder:text-gray-400"
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-3">
                <button className="p-2 rounded-lg text-gray-400 hover:text-indigo-500 transition-colors">
                  <Mic size={20} />
                </button>
                <button 
                  onClick={() => setIsExecuting(true)}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                >
                  <Send size={18} />
                  Execute
                </button>
              </div>
            </div>

            {/* Task Breakdown / Execution Flow */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Layers size={14} /> Execution Pipeline
              </h3>
              
              <div className="flex flex-col gap-4">
                {executionSteps.map((step, idx) => (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                      step.status === 'active' 
                        ? 'bg-indigo-50/50 border-indigo-200 shadow-sm' 
                        : step.status === 'completed'
                        ? 'bg-emerald-50/30 border-emerald-100'
                        : 'bg-transparent border-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        step.status === 'active' ? 'bg-indigo-500 text-white animate-pulse' :
                        step.status === 'completed' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step.status === 'completed' ? <CheckCircle2 size={18} /> : 
                         step.status === 'active' ? <Zap size={18} /> : (idx + 1)}
                      </div>
                      <div>
                        <div className={`text-sm font-bold ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-800'}`}>
                          {step.label}
                        </div>
                        <div className="text-[11px] text-gray-500 font-medium">
                          {step.status === 'active' ? 'Current operational focus...' : 
                           step.status === 'completed' ? 'Verification successful' : 'Awaiting input sequence'}
                        </div>
                      </div>
                    </div>
                    {step.status === 'active' && (
                      <div className="flex gap-1">
                        {[1, 2, 3].map(i => (
                          <motion.div 
                            key={i}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1.5 h-1.5 rounded-full bg-indigo-500" 
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Activity Feed */}
          <div className="glass rounded-3xl p-6 overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              <Activity size={14} className="text-indigo-500" /> Live Feed
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={feedIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm font-medium mono text-indigo-600 dark:text-indigo-400"
              >
                {liveFeed[feedIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT PANEL: Intelligence (5/12) */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-violet-500 text-white">
                <BrainCircuit size={20} />
              </div>
              <h2 className="text-xl font-bold">Cognitive Engine</h2>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: 'Confidence Score', value: '98.4%', color: 'text-emerald-500', icon: ShieldCheck },
                { label: 'Reasoning Depth', value: 'Level 8', color: 'text-indigo-500', icon: Layers },
                { label: 'Sources Verified', value: '42', color: 'text-blue-500', icon: Globe },
                { label: 'Execution Time', value: '1.2s', color: 'text-amber-500', icon: Clock },
                { label: 'Memory Usage', value: '14.2 GB', color: 'text-rose-500', icon: Database },
                { label: 'Active Agents', value: '05', color: 'text-violet-500', icon: Users },
              ].map((m) => (
                <div key={m.label} className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
                  <m.icon size={18} className={`${m.color} mb-3`} />
                  <div className="text-lg font-black">{m.value}</div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Status Pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['Planning', 'Researching', 'Executing', 'Completed'].map(status => (
                <span key={status} className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${
                  status === 'Executing' ? 'bg-indigo-50 text-indigo-600 border-indigo-200' : 
                  status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 opacity-50' :
                  'bg-gray-50 text-gray-400 border-gray-100'
                }`}>
                  {status}
                </span>
              ))}
            </div>

            {/* Chart */}
            <div className="h-48 w-full mt-auto">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                <Activity size={14} /> Cognitive Throughput
              </h3>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke="#6366f1" fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Quick Command */}
          <div className="glass rounded-3xl p-6 bg-indigo-600 text-white shadow-xl shadow-indigo-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-bold text-sm">
                <Command size={16} /> Quick Action
              </div>
              <div className="text-[10px] font-bold px-2 py-1 bg-white/20 rounded-md">CMD + K</div>
            </div>
            <p className="text-sm opacity-80 font-medium">
              Initialize sub-agent protocol for cross-domain synthesis.
            </p>
          </div>
        </div>
      </div>

      {/* AGENT GRID SECTION */}
      <section className="space-y-8 pt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Autonomous Agent Fleet</h2>
          <button className="text-sm font-bold text-indigo-600 flex items-center gap-1 hover:gap-2 transition-all">
            View All Units <ChevronDown size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {agents.map((agent) => (
            <motion.div
              key={agent.id}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-3xl p-6 group cursor-pointer hover:border-indigo-300 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl bg-gray-50 group-hover:bg-indigo-50 transition-colors ${agent.color}`}>
                  <agent.icon size={22} />
                </div>
                <div className={`status-light ${agent.status === 'online' ? 'status-online' : 'status-busy'}`} />
              </div>
              
              <h3 className="font-bold text-sm mb-2">{agent.name}</h3>
              <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 mb-4">
                <span>Task Queue: {agent.tasks}</span>
                <span className="text-indigo-600">{agent.progress}%</span>
              </div>
              
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${agent.progress}%` }}
                  className={`h-full bg-indigo-500 rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ChevronDown({ size, className }) {
  return <Play size={size} className={`rotate-90 ${className}`} />;
}
