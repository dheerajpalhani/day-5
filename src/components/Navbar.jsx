import { useState } from 'react';
import { Search, Compass, TrendingUp, Info, Menu, ChevronDown } from 'lucide-react';
import { blogs } from '../data/blogs';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onSelectBlog }) {
  const [showTrending, setShowTrending] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 h-20">
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.reload()}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
              B
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-800">blog<span className="text-violet-600">Summr</span></span>
          </div>


          {/* Links */}
          <div className="hidden md:flex items-center gap-10">
            <NavItem icon={<Compass size={18} />} label="Explore" />
            
            {/* Trending Dropdown */}
            <div className="relative h-full flex items-center" 
                 onMouseEnter={() => setShowTrending(true)} 
                 onMouseLeave={() => setShowTrending(false)}>
              <div className="flex items-center gap-2 text-slate-500 hover:text-violet-600 font-bold text-sm tracking-wide cursor-pointer py-4 transition-colors">
                <TrendingUp size={18} />
                <span>Trending</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${showTrending ? 'rotate-180' : ''}`} />
              </div>

              <AnimatePresence>
                {showTrending && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-[80%] left-0 w-80 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-6 z-50"
                  >
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-2">Popular Articles</p>
                    <div className="space-y-3">
                      {blogs.map((blog) => (
                        <button
                          key={blog.id}
                          onClick={() => {
                            onSelectBlog(blog);
                            setShowTrending(false);
                          }}
                          className="w-full text-left p-4 hover:bg-slate-50 rounded-2xl transition-all group"
                        >
                          <p className="text-[10px] font-bold text-violet-500 uppercase tracking-widest mb-1">{blog.category}</p>
                          <p className="text-sm font-bold text-slate-700 group-hover:text-violet-600 transition-colors leading-snug">{blog.title}</p>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavItem icon={<Info size={18} />} label="About" />
          </div>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-6">
          <div className="relative group hidden sm:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              style={{ paddingLeft: '3.5rem' }}
              className="bg-slate-50/50 border border-slate-100 rounded-2xl py-3 pr-6 w-72 focus:outline-none focus:ring-4 focus:ring-violet-50 focus:bg-white transition-all text-sm font-medium"
            />
          </div>

          <button className="md:hidden p-2 text-slate-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ icon, label }) {
  return (
    <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-violet-600 font-bold text-sm tracking-wide transition-colors">
      {icon}
      <span>{label}</span>
    </a>
  );
}
