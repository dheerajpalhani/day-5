import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Heart, Bookmark, Share2, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { sampleMarkdown } from '../data/sampleContent';

export default function BlogViewer() {
  return (
    <div className="flex flex-col gap-8">
      {/* Article Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-violet-100 text-violet-600 text-xs font-bold rounded-full uppercase tracking-wider">Artificial Intelligence</span>
          <span className="flex items-center gap-1.5 text-slate-400 text-sm">
            <Clock size={14} /> 6 min read
          </span>
          <span className="flex items-center gap-1.5 text-slate-400 text-sm">
            <Calendar size={14} /> Oct 24, 2023
          </span>
        </div>
      </div>

      {/* Main Content Card */}
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-[32px] p-8 md:p-12"
      >
        <div className="prose max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-2xl !my-8 shadow-xl"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-slate-100 text-violet-600 px-1.5 py-0.5 rounded font-mono text-sm" {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {sampleMarkdown}
          </ReactMarkdown>
        </div>

        {/* Interaction Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ActionButton icon={<Heart size={20} />} label="2.4k" color="hover:text-rose-500 hover:bg-rose-50" />
            <ActionButton icon={<Bookmark size={20} />} label="Bookmark" color="hover:text-amber-500 hover:bg-amber-50" />
          </div>
          <ActionButton icon={<Share2 size={20} />} label="Share" color="hover:text-sky-500 hover:bg-sky-50" />
        </div>
      </motion.article>
    </div>
  );
}

function ActionButton({ icon, label, color }) {
  return (
    <button className={`flex items-center gap-2 px-4 py-2 rounded-xl text-slate-500 font-semibold transition-all ${color}`}>
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}
