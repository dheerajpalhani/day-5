import { Search, Compass, TrendingUp, Info, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass px-6 py-3 rounded-2xl flex items-center justify-between shadow-sm border-white/50">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center shadow-lg shadow-violet-200">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-800">SUMMR</span>
          </div>

          {/* Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink icon={<Compass size={18} />} label="Explore" active />
            <NavLink icon={<TrendingUp size={18} />} label="Trending" />
            <NavLink icon={<Info size={18} />} label="About" />
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="bg-slate-50/50 border border-slate-100 rounded-xl py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-violet-100 focus:bg-white transition-all text-sm"
              />
            </div>
            <button className="md:hidden p-2 text-slate-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, label, active }) {
  return (
    <a 
      href="#" 
      className={`flex items-center gap-2 text-sm font-semibold transition-all hover:text-violet-600 ${active ? 'text-violet-600' : 'text-slate-500'}`}
    >
      {icon}
      <span>{label}</span>
      {active && (
        <motion.div 
          layoutId="nav-active"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-600 rounded-full"
        />
      )}
    </a>
  );
}
