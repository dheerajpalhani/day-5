import { motion } from 'framer-motion';

export default function BackgroundNodes() {
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 20,
  }));

  return (
    <div className="bg-nodes overflow-hidden">
      <svg width="100%" height="100%" className="absolute inset-0">
        {/* Simple lines connecting some nodes */}
        {nodes.map((node, i) => {
          if (i % 3 === 0 && i < nodes.length - 1) {
            return (
              <line
                key={`line-${i}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${nodes[i+1].x}%`}
                y2={`${nodes[i+1].y}%`}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-indigo-200/30 dark:text-indigo-900/20"
              />
            );
          }
          return null;
        })}
      </svg>
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full bg-indigo-200/40 dark:bg-indigo-900/30"
          style={{
            width: node.size,
            height: node.size,
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
