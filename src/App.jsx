import { useState } from 'react';
import Navbar from './components/Navbar';
import BlogViewer from './components/BlogViewer';
import AISummaryPanel from './components/AISummaryPanel';
import BackgroundBlobs from './components/BackgroundBlobs';
import ReadingProgress from './components/ReadingProgress';
import { blogs } from './data/blogs';

export default function App() {
  const [currentBlog, setCurrentBlog] = useState(blogs[0]);

  return (
    <div className="relative min-h-screen selection:bg-violet-100 selection:text-violet-600 transition-colors duration-500">
      {/* Visual Enhancements */}
      <BackgroundBlobs />
      <ReadingProgress />

      {/* Global Navbar */}
      <Navbar onSelectBlog={setCurrentBlog} />

      {/* Spacer for Fixed Navbar */}
      <div className="h-32"></div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-8 pt-10 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">


          
          {/* Left Side - Blog Viewer (8 columns) */}
          <section className="lg:col-span-8 mt-10">
            <BlogViewer blog={currentBlog} />
          </section>

          {/* Right Side - AI Summary Panel (4 columns) */}
          <aside className="lg:col-span-4">
            <AISummaryPanel blog={currentBlog} />
          </aside>


        </div>
      </main>

      {/* Aesthetic Bottom Blob */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </div>
  );
}
